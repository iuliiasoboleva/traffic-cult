import React, { useEffect, useState } from 'react';

import linksIcon from '../../assets/images/icons/links.svg';
import registrationsIcon from '../../assets/images/icons/registrations.svg';
import salesIcon from '../../assets/images/icons/sales.svg';
import EmptyLinksPlaceholder from '../../components/EmptyLinksPlaceholder';
import LinksFilterPanel from '../../components/LinksFilterPanel';
import LinksList from '../../components/LinksList';
import LinksTabs from '../../components/LinksTabs';
import Sidebar from '../../components/Sidebar';
import StatsSection from '../../components/StatsSection';
import { linksMock } from '../../mocks/linksMock';
import { userMock } from '../../mocks/userMock';
import { Container, Content, FilterWrapper, LinkTitle } from './styles';

const statsMock = [
  {
    label: 'Создано\nссылок',
    value: 3,
    icon: <img src={linksIcon} alt="links" />,
    isCurrency: false,
  },
  {
    label: 'Тотал\nрегистраций',
    value: 5,
    icon: <img src={registrationsIcon} alt="registrations" />,
    isCurrency: false,
  },
  {
    label: 'Количество\nпродаж',
    value: 2,
    icon: <img src={salesIcon} alt="sales" />,
    isCurrency: false,
  },
  { label: 'Тотал\nпродаж', value: 180, icon: '', isCurrency: true },
];

const menuMock = [{ label: 'Трафик культ' }, { label: 'Название №2' }, { label: 'Название №3' }];
const title = 'Трафик\nКульт ®';

const HomePage = () => {
  const [filteredLinks, setFilteredLinks] = useState([]);
  const [activeTab, setActiveTab] = useState('Все ссылки');

  useEffect(() => {
    applyFilters();
  }, [activeTab]);

  const applyFilters = (dateRange = null) => {
    let filtered = [...linksMock];

    switch (activeTab) {
      case 'Избранные':
        filtered = filtered.filter((item) => item.favorite);
        break;
      case 'Архив':
        filtered = filtered.filter((item) => item.archived);
        break;
      case 'Junior':
      case 'Senior':
        filtered = filtered.filter((item) => item.grade === activeTab);
        break;
      default:
        break;
    }

    if (dateRange) {
      const from = new Date(dateRange.from.setHours(0, 0, 0, 0));
      const to = new Date(dateRange.to.setHours(23, 59, 59, 999));

      filtered = filtered.filter((item) => {
        const [day, month, year] = item.date.split('.');
        const itemDate = new Date(`${year}-${month}-${day}`);
        return itemDate >= from && itemDate <= to;
      });
    }

    setFilteredLinks(filtered);
  };

  const handleFilter = ({ from, to }) => {
    applyFilters({ from, to });
  };

  return (
    <Container>
      <Sidebar title={title} user={userMock} menuItems={menuMock} />
      <Content>
        <StatsSection title="Личная статистика" stats={statsMock} />

        <LinkTitle>Статистика по ссылкам</LinkTitle>
        <FilterWrapper>
          <LinksTabs value={activeTab} onChange={setActiveTab} />
          <LinksFilterPanel onFilter={handleFilter} />
        </FilterWrapper>
        {filteredLinks.length === 0 ? (
          <EmptyLinksPlaceholder onCreate={() => console.log('Создать ссылку')} />
        ) : (
          <LinksList items={filteredLinks} />
        )}
      </Content>
    </Container>
  );
};

export default HomePage;
