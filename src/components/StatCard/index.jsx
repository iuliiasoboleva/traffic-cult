import React from 'react';

import { Card, IconWrapper, Label, Sublabel, Value, ValueWrapper } from './styles';

const StatCard = ({ label, sublabel, value, icon, isCurrency, action }) => {
  return (
    <Card>
      <Label>
        {label}
        {sublabel && <Sublabel>{sublabel}</Sublabel>}
      </Label>
      <ValueWrapper>
        <Value>
          {value}
          {isCurrency && <span>₽</span>}
        </Value>
        {icon && <IconWrapper>{icon}</IconWrapper>}
        {action && value > 0 && <div>{action}</div>}
      </ValueWrapper>
    </Card>
  );
};

export default StatCard;
