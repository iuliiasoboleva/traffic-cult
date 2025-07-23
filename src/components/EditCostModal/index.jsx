import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { updateCost } from '../../store/linksSlice';
import {
  CloseButton,
  ErrorText,
  Label,
  ModalActions,
  ModalButton,
  ModalOverlay,
  ModalWrapper,
  StyledInput,
  StyledInputWrapper,
} from './styles';

const schema = yup.object().shape({
  amount: yup
    .string()
    .required('Введите сумму')
    .test('valid', 'Некорректная сумма', (val) => {
      const numeric = parseFloat(val.replace(/\s|₽/g, '').replace(',', '.'));
      return numeric > 0;
    }),
});

const EditCostModal = ({ link, onClose }) => {
  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    setValue,
    register,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
    defaultValues: {
      amount: new Intl.NumberFormat('ru-RU').format(link.cost) + ' ₽',
    },
  });

  const rawValue = watch('amount');

  const handleInputChange = (e) => {
    const inputType = e.nativeEvent?.inputType;
    let raw = rawValue.replace(/\D/g, '');

    if (inputType === 'deleteContentBackward') {
      raw = raw.slice(0, -1);
    } else {
      const added = e.target.value.replace(/\D/g, '');
      raw = raw + added.slice(raw.length);
    }

    const formatted = raw ? new Intl.NumberFormat('ru-RU').format(Number(raw)) + ' ₽' : '';
    setValue('amount', formatted, { shouldValidate: true });
  };

  const onSubmit = (data) => {
    const numeric = parseFloat(data.amount.replace(/\s|₽/g, '').replace(',', '.'));
    dispatch(updateCost({ id: link.id, newCost: numeric }));
    onClose();
  };

  return (
    <ModalOverlay>
      <ModalWrapper>
        <CloseButton onClick={onClose}>×</CloseButton>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="amount"
            control={control}
            render={({ field }) => (
              <StyledInputWrapper>
                {errors.amount?.message ? (
                  <ErrorText>{errors.amount?.message}</ErrorText>
                ) : (
                  <Label>Введите новую стоимость</Label>
                )}
                <StyledInput
                  {...field}
                  inputMode="numeric"
                  {...register('amount')}
                  value={rawValue}
                  onChange={handleInputChange}
                  error={!!errors.amount}
                />
              </StyledInputWrapper>
            )}
          />

          <ModalActions>
            <ModalButton type="button" onClick={onClose}>
              Отмена
            </ModalButton>
            <ModalButton type="submit" disabled={!isValid}>
              Сохранить
            </ModalButton>
          </ModalActions>
        </form>
      </ModalWrapper>
    </ModalOverlay>
  );
};

export default EditCostModal;
