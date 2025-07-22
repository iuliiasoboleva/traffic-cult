import React, { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import {
  ErrorText,
  Label,
  ModalActions,
  ModalButton,
  ModalText,
  ModalTitle,
  NetworkBadge,
  NetworkOption,
  NetworkSwitcher,
  ProgressWrapper,
  Step,
  StyledInput,
  SubText,
} from './styles';

const schemaRUB = yup.object().shape({
  surname: yup.string().required('Введите фамилию'),
  name: yup.string().required('Введите имя'),
  cardName: yup.string().required('Название карты обязательно'),
  cardNumber: yup
    .string()
    .required('Введите номер карты')
    .matches(/^([0-9]{4} ){3}[0-9]{4}$/, 'Номер карты должен быть в формате XXXX XXXX XXXX XXXX'),
});

const schemaUSDT = yup.object().shape({
  wallet: yup.string().required('Введите адрес кошелька'),
  network: yup.string().required('Выберите сеть'),
});

const Step2Details = ({ method, formData, setFormData, onBack, onNext }) => {
  const isRUB = method === 'RUB';

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(isRUB ? schemaRUB : schemaUSDT),
    defaultValues: formData,
  });

  useEffect(() => {
    reset({
      ...formData,
      network: formData.network || '',
      wallet: formData.wallet || '',
      surname: formData.surname || '',
      name: formData.name || '',
      patronymic: formData.patronymic || '',
      cardName: formData.cardName || '',
      cardNumber: formData.cardNumber || '',
    });
  }, [method, reset]);

  const onSubmit = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
    onNext();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ProgressWrapper>
        {['Способ', 'Реквизиты', 'Сумма'].map((_, i) => (
          <Step key={i} $active={i <= 1} />
        ))}
      </ProgressWrapper>

      <ModalTitle>Добавление реквизитов</ModalTitle>
      <ModalText>
        {isRUB
          ? 'Введите паспортные данные владельца карты'
          : 'Введите сеть и адрес криптокошелька'}
      </ModalText>

      {isRUB ? (
        <>
          <Controller
            name="surname"
            control={control}
            render={({ field }) => (
              <StyledInput {...field} placeholder="Фамилия (кириллица)" error={!!errors.surname} />
            )}
          />
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <StyledInput {...field} placeholder="Имя (кириллица)" error={!!errors.name} />
            )}
          />
          <Controller
            name="patronymic"
            control={control}
            render={({ field }) => <StyledInput {...field} placeholder="Отчество (опционально)" />}
          />
          <Label>Введите реквизиты карты</Label>
          <SubText>На указанную карту отправим сумму не менее 100₽</SubText>
          <Controller
            name="cardName"
            control={control}
            render={({ field }) => (
              <StyledInput {...field} placeholder="Название карты" error={!!errors.cardName} />
            )}
          />
          <Controller
            name="cardNumber"
            control={control}
            render={({ field }) => (
              <StyledInput
                {...field}
                placeholder="Номер карты"
                inputMode="numeric"
                maxLength={19}
                onChange={(e) => {
                  const raw = e.target.value.replace(/\D/g, '').slice(0, 16);
                  const masked = raw.replace(/(.{4})/g, '$1 ').trim();
                  field.onChange(masked);
                }}
                value={field.value}
                error={!!errors.cardNumber}
              />
            )}
          />
          {errors.cardNumber && <ErrorText>{errors.cardNumber.message}</ErrorText>}
        </>
      ) : (
        <>
          <Controller
            name="wallet"
            control={control}
            render={({ field }) => (
              <StyledInput
                {...field}
                placeholder="Адрес криптокошелька"
                error={!!errors.wallet}
                onChange={(e) => {
                  const cleaned = e.target.value
                    .trim()
                    .toUpperCase()
                    .replace(/[^A-Z0-9]/g, '');
                  field.onChange(cleaned);
                }}
              />
            )}
          />
          <Label>Сеть</Label>
          <Controller
            name="network"
            control={control}
            render={({ field }) => (
              <NetworkSwitcher>
                {['TRC20', 'TON'].map((net) => (
                  <NetworkOption
                    key={net}
                    $active={field.value === net}
                    onClick={() => field.onChange(net)}
                  >
                    {net}
                    {field.value === net && <NetworkBadge>Выбрано</NetworkBadge>}
                  </NetworkOption>
                ))}
              </NetworkSwitcher>
            )}
          />
        </>
      )}

      <ModalActions>
        <ModalButton type="button" onClick={onBack}>
          Назад
        </ModalButton>
        <ModalButton type="submit" disabled={!isValid}>
          {isRUB ? 'Добавить карту' : 'Добавить криптокошелек'}
        </ModalButton>
      </ModalActions>
    </form>
  );
};

export default Step2Details;
