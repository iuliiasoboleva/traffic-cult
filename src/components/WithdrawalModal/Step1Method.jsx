import React from 'react';

import { userMock } from '../../mocks/userMock';
import {
  Badge,
  CardContainer,
  ModalActions,
  ModalButton,
  ModalText,
  ModalTitle,
  ProgressWrapper,
  Step,
  WithdrawCard,
} from './styles';

const Step1Method = ({ method, setMethod, onNext }) => {
  return (
    <>
      <ProgressWrapper>
        {['Способ', 'Реквизиты', 'Сумма'].map((_, i) => (
          <Step key={i} $active={i === 0} />
        ))}
      </ProgressWrapper>

      <ModalTitle>Выберите подходящий способ для вывода средств</ModalTitle>
      <ModalText>Доступно: ₽ {userMock.withdrawalData.available}</ModalText>

      <CardContainer>
        <WithdrawCard $selected={method === 'RUB'} onClick={() => setMethod('RUB')}>
          {method === 'RUB' ? <Badge>Выбрано</Badge> : <Badge disabled>Выбрать</Badge>}
          <span>Вывод в RUB</span>
        </WithdrawCard>
        <WithdrawCard $selected={method === 'USDT'} onClick={() => setMethod('USDT')}>
          {method === 'USDT' ? <Badge>Выбрано</Badge> : <Badge disabled>Выбрать</Badge>}
          <span>Вывод в USDT</span>
        </WithdrawCard>
      </CardContainer>

      <ModalActions>
        <ModalButton disabled={!method} onClick={onNext}>
          Далее
        </ModalButton>
      </ModalActions>
    </>
  );
};

export default Step1Method;
