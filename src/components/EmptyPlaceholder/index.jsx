import React from 'react';

import { Button, IconCircle, IconWrapper, Subtitle, Title, Wrapper } from './styles';

const EmptyPlaceholder = ({
  icon,
  count = 0,
  title = 'Нет данных',
  subtitle = '',
  buttonLabel,
  onButtonClick,
}) => {
  return (
    <Wrapper>
      <IconWrapper>
        {icon && <img src={icon} alt="Пусто" />}
        <IconCircle>{count}</IconCircle>
      </IconWrapper>
      <Title>{title}</Title>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
      {buttonLabel && onButtonClick && <Button onClick={onButtonClick}>{buttonLabel}</Button>}
    </Wrapper>
  );
};

export default EmptyPlaceholder;
