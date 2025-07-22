import React from 'react';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

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
  Summary,
} from './styles';

const Step3Amount = ({ method, setAmount, onBack, onSubmit }) => {
  const balance = method === 'RUB' ? 5683 : 5683 / 13.53;
  const maxDigits = 9;

  const schema = yup.object().shape({
    amount: yup
      .string()
      .required('Введите сумму')
      .test('valid', 'Недостаточно средств', (val) => {
        const numeric = parseFloat(val.replace(/\s|₽/g, '').replace(',', '.'));
        return numeric > 0 && numeric <= balance;
      }),
  });

  const {
    register,
    handleSubmit,
    setValue,
    watch,
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
      <ModalText>Введите сумму которую хотите вывести</ModalText>

      <Label>{errors.amount?.message && <ErrorText>{errors.amount.message}</ErrorText>}</Label>

      <StyledInput
        placeholder="Сумма"
        inputMode="numeric"
        {...register('amount')}
        value={rawValue}
        onChange={handleInputChange}
        error={!!errors.amount}
      />

      <Summary>
        <div>
          К выводу
          <b>
            {method === 'USDT'
              ? `${(getNumeric() / 13.53).toFixed(2)} USDT`
              : `${getNumeric().toFixed(2)} RUB`}
          </b>
        </div>
        <div>
          Баланс{' '}
          <b>
            {balance.toFixed(2)} {method}
          </b>
        </div>
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
