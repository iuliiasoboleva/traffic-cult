import React, { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

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
import { userMock } from '../../mocks/userMock';
import { FilterWrapper, LinkTitle, LinkWrapper, StyledLevel } from './styles';

const tabs = ['Все ссылки', 'Избранные', 'Архив', 'Junior', 'Senior'];

const HomePage = () => {
  const links = useSelector((state) => state.links.items);

  const [filteredLinks, setFilteredLinks] = useState([]);
  const [activeTab, setActiveTab] = useState('Все ссылки');
  const [dateRange, setDateRange] = useState(null);

  const statsValues = useMemo(
    () => ({
      linksCreated: links.length,
      totalRegistrations: links.reduce((sum, l) => sum + l.registrations, 0),
      totalSalesCount: links.reduce((sum, l) => sum + l.salesCount || 0, 0),
      totalSalesAmount: links.reduce((sum, l) => sum + l.profit, 0),
    }),
    [links],
  );

  const statsMock = useMemo(
    () => [
      {
        label: 'Создано\nссылок',
        value: statsValues.linksCreated,
        icon: <img src={linksIcon} alt="links" />,
        isCurrency: false,
      },
      {
        label: 'Тотал\nрегистраций',
        value: statsValues.totalRegistrations,
        icon: <img src={registrationsIcon} alt="registrations" />,
        isCurrency: false,
      },
      {
        label: 'Количество\nпродаж',
        value: statsValues.totalSalesCount,
        icon: <img src={salesIcon} alt="sales" />,
        isCurrency: false,
      },
      {
        label: 'Тотал\nпродаж',
        value: statsValues.totalSalesAmount,
        icon: '',
        isCurrency: true,
      },
    ],
    [statsValues],
  );

  useEffect(() => {
    let result = [...links];

    const filters = {
      Избранные: (item) => item.favorite,
      Архив: (item) => item.archived,
      Junior: (item) => item.grade === 'Junior',
      Senior: (item) => item.grade === 'Senior',
    };

    if (filters[activeTab]) {
      result = result.filter(filters[activeTab]);
    }

    if (dateRange) {
      const from = new Date(dateRange.from.setHours(0, 0, 0, 0));
      const to = new Date(dateRange.to.setHours(23, 59, 59, 999));

      result = result.filter((item) => {
        const [day, month, year] = item.date.split('.');
        const itemDate = new Date(`${year}-${month}-${day}`);
        return itemDate >= from && itemDate <= to;
      });
    }

    setFilteredLinks(result);
  }, [activeTab, dateRange, links]);

  const handleFilter = ({ from, to }) => {
    setDateRange({ from, to });
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
