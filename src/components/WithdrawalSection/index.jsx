import React from 'react';

import StatCard from '../StatCard';
import { CardsGrid, Header, Section, Title } from './styles';

const WithdrawalSection = ({ title, stats }) => {
  return (
    <Section>
      <Header>
        <Title>{title}</Title>
      </Header>
      <CardsGrid>
        {stats.map((stat, i) => (
          <StatCard
            key={i}
            label={stat.label}
            sublabel={stat.sublabel}
            value={stat.value}
            icon={stat.icon}
            isCurrency={stat.isCurrency}
            action={stat.action}
          />
        ))}
      </CardsGrid>
    </Section>
  );
};

export default WithdrawalSection;
