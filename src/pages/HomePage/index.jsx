import React, { useState } from 'react';

import linksIcon from '../../assets/images/icons/links.svg';
import registrationsIcon from '../../assets/images/icons/registrations.svg';
import salesIcon from '../../assets/images/icons/sales.svg';
import EmptyLinksPlaceholder from '../../components/EmptyLinksPlaceholder';
import LinksFilterPanel from '../../components/LinksFilterPanel';
import LinksTabs from '../../components/LinksTabs';
import Sidebar from '../../components/Sidebar';
import StatsSection from '../../components/StatsSection';
import { Container, Content, FilterWrapper } from './styles';

const statsMock = [
  {
    label: 'Создано ссылок',
    value: 3,
    icon: <img src={linksIcon} alt="links" />,
    isCurrency: false,
  },
  {
    label: 'Тотал регистраций',
    value: 5,
    icon: <img src={registrationsIcon} alt="registrations" />,
    isCurrency: false,
  },
  {
    label: 'Количество продаж',
    value: 2,
    icon: <img src={salesIcon} alt="sales" />,
    isCurrency: false,
  },
  { label: 'Тотал продаж', value: 180, icon: '', isCurrency: true },
];

const userMock = {
  name: 'Victor Hesoyam',
  level: 'Junior',
  avatar: '',
};

const menuMock = [{ label: 'Трафик культ *' }, { label: 'Название №2' }, { label: 'Название №3' }];

const HomePage = () => {
  const [filteredLinks, setFilteredLinks] = useState([]);
  const [activeTab, setActiveTab] = useState('Все ссылки');

  const handleFilter = ({ from, to }) => {
    console.log('Фильтрация по:', from, to);
    setFilteredLinks([]);
  };

  return (
    <Container>
      <Sidebar user={userMock} menuItems={menuMock} />
      <Content>
        <StatsSection title="Личная статистика" stats={statsMock} />

        <h3 style={{ color: 'white', marginTop: 32 }}>Статистика по ссылкам</h3>
        <FilterWrapper>
          <LinksTabs value={activeTab} onChange={setActiveTab} />
          <LinksFilterPanel onFilter={handleFilter} />
        </FilterWrapper>
        {filteredLinks.length === 0 && (
          <EmptyLinksPlaceholder onCreate={() => console.log('Создать ссылку')} />
        )}

        {/* Тут можно будет отрисовывать <LinksList items={filteredLinks} /> */}
      </Content>
    </Container>
  );
};

export default HomePage;
