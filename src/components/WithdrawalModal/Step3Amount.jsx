import React from 'react';
import { Controller, useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { userMock } from '../../mocks/userMock';
import {
  ErrorText,
  Label,
  ModalActions,
  ModalButton,
  ModalText,
  ModalTitle,
  ProgressWrapper,
  Step,
  StyledInput,
  StyledInputWrapper,
  Summary,
  SummaryRow,
} from './styles';

const Step3Amount = ({ method, setAmount, onBack, onSubmit }) => {
  const rawBalance = userMock.withdrawalData.available; // баланс всегда в рублях
  const rate = userMock.withdrawalData.usdtToRubRate;
  const maxDigits = 9;

  const schema = yup.object().shape({
    amount: yup
      .string()
      .required('Введите сумму')
      .test('valid', 'Недостаточно средств на балансе', (val) => {
        const numeric = parseFloat(val.replace(/\s|₽/g, '').replace(',', '.'));
        return numeric > 0 && numeric <= rawBalance;
      }),
  });

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    control,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
    defaultValues: { amount: '' },
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

    const digits = raw.slice(0, maxDigits);
    const formatted = digits ? new Intl.NumberFormat('ru-RU').format(Number(digits)) + ' ₽' : '';

    setValue('amount', formatted, { shouldValidate: true });
    setAmount(formatted);
  };

  const getNumeric = () => {
    return parseFloat(rawValue.replace(/\s|₽/g, '').replace(',', '.')) || 0;
  };

  const onValidSubmit = () => {
    setAmount(rawValue);
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit(onValidSubmit)}>
      <ProgressWrapper>
        {['Способ', 'Реквизиты', 'Сумма'].map((_, i) => (
          <Step key={i} $active={i <= 2} />
        ))}
      </ProgressWrapper>

      <ModalTitle>Сумма к выводу</ModalTitle>
      <ModalText>Введите сумму, которую хотите вывести</ModalText>

      <Controller
        name="cardNumber"
        control={control}
        render={({ field }) => (
          <StyledInputWrapper>
            {errors.amount?.message ? (
              <ErrorText>{errors.amount?.message}</ErrorText>
            ) : (
              <Label>Сумма вывода</Label>
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

      <Summary>
        <SummaryRow>
          <span>К выводу</span>
          <p>
            {method === 'USDT'
              ? `${(getNumeric() / rate).toFixed(2)} USDT`
              : `${getNumeric().toFixed(2)} RUB`}
          </p>
        </SummaryRow>

        <SummaryRow>
          <span>Баланс</span>
          <p>
            {method === 'USDT'
              ? `${(rawBalance / rate).toFixed(2)} USDT`
              : `${rawBalance.toFixed(2)} RUB`}
          </p>
        </SummaryRow>
      </Summary>

      <ModalActions>
        <ModalButton type="button" onClick={onBack}>
          Назад
        </ModalButton>
        <ModalButton type="submit" disabled={!isValid}>
          Вывести
        </ModalButton>
      </ModalActions>
    </form>
  );
};

export default Step3Amount;
