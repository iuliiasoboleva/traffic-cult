import React, { useEffect, useState } from 'react';

import linkIcon from '../../assets/images/icons/empty-link.svg';
import linksIcon from '../../assets/images/icons/links.svg';
import registrationsIcon from '../../assets/images/icons/registrations.svg';
import salesIcon from '../../assets/images/icons/sales.svg';
import EmptyPlaceholder from '../../components/EmptyPlaceholder';
import LinksFilterPanel from '../../components/LinksFilterPanel';
import LinksList from '../../components/LinksList';
import LinksTabs from '../../components/LinksTabs';
import StatsSection from '../../components/StatsSection';
import { capitalize } from '../../helpers';
import { linksMock } from '../../mocks/linksMock';
import { userMock } from '../../mocks/userMock';
import { FilterWrapper, LinkTitle, LinkWrapper, StyledLevel } from './styles';

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

const tabs = ['Все ссылки', 'Избранные', 'Архив', 'Junior', 'Senior'];

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
    <>
      <StatsSection title="Личная статистика" stats={statsMock} />
      <StatsSection
        title={
          <>
            Общая статистика{' '}
            <StyledLevel level={userMock.level}>{capitalize(userMock.level)}</StyledLevel>
          </>
        }
        stats={statsMock}
      />
      <LinkWrapper>
        <LinkTitle>Статистика по ссылкам</LinkTitle>
        <FilterWrapper>
          <LinksTabs tabs={tabs} value={activeTab} onChange={setActiveTab} />
          <LinksFilterPanel onFilter={handleFilter} />
        </FilterWrapper>
        {filteredLinks.length === 0 ? (
          <EmptyPlaceholder
            icon={linkIcon}
            count={0}
            title="У вас ещё нет созданных ссылок"
            subtitle="Чтобы провести анализ и начать работать с трафиком, создайте ссылку"
            buttonLabel="Создать ссылку"
            onButtonClick={() => console.log('Создать ссылку')}
          />
        ) : (
          <LinksList items={filteredLinks} />
        )}
      </LinkWrapper>
    </>
  );
};

export default HomePage;
