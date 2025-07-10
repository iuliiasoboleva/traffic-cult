import React, { useState } from 'react';

import chevronDownIcon from '../../assets/images/icons/arrow-down.svg';
import chevronUpIcon from '../../assets/images/icons/arrow-up.svg';
import StatCard from '../StatCard';
import { CardsGrid, Header, Section, Title, ToggleButton } from './styles';

const StatsSection = ({ title, stats }) => {
  const [open, setOpen] = useState(true);

  return (
    <Section>
      <Header onClick={() => setOpen(!open)}>
        <Title>{title}</Title>
        <ToggleButton>
          <img src={open ? chevronUpIcon : chevronDownIcon} alt="Toggle" width={10} height={6} />
        </ToggleButton>{' '}
      </Header>
      {open && (
        <CardsGrid>
          {stats.map((stat, i) => (
            <StatCard
              key={i}
              label={stat.label}
              value={stat.value}
              icon={stat.icon}
              isCurrency={stat.isCurrency}
            />
          ))}
        </CardsGrid>
      )}
    </Section>
  );
};

export default StatsSection;
