import React from 'react';

import { Card, IconWrapper, Label, Value, ValueWrapper } from './styles';

const StatCard = ({ label, value, icon, isCurrency }) => {
  return (
    <Card>
      <Label>{label}</Label>
      <ValueWrapper>
        <Value>
          {value}
          {isCurrency && <span>₽</span>}
        </Value>
        <IconWrapper>{icon}</IconWrapper>
      </ValueWrapper>
    </Card>
  );
};

export default StatCard;
