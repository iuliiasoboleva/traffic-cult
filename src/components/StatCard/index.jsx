import React from 'react';

import {
  Card,
  DesktopAction,
  IconWrapper,
  Label,
  MobileAction,
  Sublabel,
  Value,
  ValueWrapper,
} from './styles';

const StatCard = ({ label, sublabel, value, icon, isCurrency, action }) => {
  return (
    <Card>
      <Label>
        <div>
          {label}
          {sublabel && <Sublabel>{sublabel}</Sublabel>}
        </div>
        {action && value > 0 && <MobileAction>{action}</MobileAction>}
      </Label>
      <ValueWrapper>
        <Value>
          {value}
          {isCurrency && <span>₽</span>}
        </Value>
        {icon && <IconWrapper>{icon}</IconWrapper>}
        {action && value > 0 && <DesktopAction>{action}</DesktopAction>}
      </ValueWrapper>
    </Card>
  );
};

export default StatCard;
