import React from 'react';

import LinkIcon from '../../assets/images/icons/empty-link.svg';
import { Button, IconCircle, IconWrapper, Subtitle, Title, Wrapper } from './styles';

const EmptyLinksPlaceholder = ({ onCreate }) => {
  return (
    <Wrapper>
      <IconWrapper>
        <img src={LinkIcon} alt="Нет ссылок" />
        <IconCircle>0</IconCircle>
      </IconWrapper>
      <Title>У вас ещё нет созданных ссылок</Title>
      <Subtitle>Чтобы провести анализ и начать работать с трафиком, создайте ссылку</Subtitle>
      <Button onClick={onCreate}>Создать ссылку</Button>
    </Wrapper>
  );
};

export default EmptyLinksPlaceholder;
