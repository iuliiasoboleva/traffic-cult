import React, { useEffect, useState } from 'react';

import linkIcon from '../../assets/images/icons/empty-link.svg';
import withdrawIcon from '../../assets/images/icons/withdraw-red.svg';
import EmptyPlaceholder from '../../components/EmptyPlaceholder';
import LinksFilterPanel from '../../components/LinksFilterPanel';
import LinksTabs from '../../components/LinksTabs';
import MoneyList from '../../components/MoneyList';
import WithdrawalModal from '../../components/WithdrawalModal';
import WithdrawalSection from '../../components/WithdrawalSection';
import { moneyMock } from '../../mocks/moneyMock';
import { ButtonStyled, FilterWrapper, LinkWrapper } from './styles';

const tabs = ['Сегодня', 'Неделя', 'Месяц', 'Всё время'];

const Withdrawal = () => {
  const [filteredMoney, setFilteredMoney] = useState([]);
  const [activeTab, setActiveTab] = useState('Сегодня');
  const [customDateRange, setCustomDateRange] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const withdrawalData = {
    balance: 904,
    turnover: 1000,
    available: 808.5,
  };

  const withdrawalMock = [
    {
      label: 'Баланс',
      value: withdrawalData.balance,
      isCurrency: true,
    },
    {
      label: 'Оборот',
      sublabel: '(за всё время)',
      value: withdrawalData.turnover,
      isCurrency: true,
    },
    {
      label: 'Доступно\nдля вывода',
      value: withdrawalData.available,
      isCurrency: true,
      ...(withdrawalData.available > 0 && {
        action: (
          <ButtonStyled onClick={() => setIsModalOpen(true)}>
            <img src={withdrawIcon} alt="Вывод средств" />
            Вывод средств
          </ButtonStyled>
        ),
      }),
    },
  ];

  useEffect(() => {
    applyFilters();
  }, [activeTab, customDateRange]);

  const applyFilters = () => {
    let filtered = [...moneyMock];
    const now = new Date();

    switch (activeTab) {
      case 'Сегодня': {
        const start = new Date(now.setHours(0, 0, 0, 0));
        const end = new Date(now.setHours(23, 59, 59, 999));
        filtered = filterByDate(filtered, start, end);
        break;
      }
      case 'Неделя': {
        const start = new Date(now);
        start.setDate(now.getDate() - 6);
        start.setHours(0, 0, 0, 0);
        const end = new Date(now.setHours(23, 59, 59, 999));
        filtered = filterByDate(filtered, start, end);
        break;
      }
      case 'Месяц': {
        const start = new Date(now);
        start.setMonth(now.getMonth() - 1);
        start.setHours(0, 0, 0, 0);
        const end = new Date(now.setHours(23, 59, 59, 999));
        filtered = filterByDate(filtered, start, end);
        break;
      }
      default:
        break;
    }

    if (customDateRange?.from && customDateRange?.to) {
      const from = new Date(customDateRange.from.setHours(0, 0, 0, 0));
      const to = new Date(customDateRange.to.setHours(23, 59, 59, 999));
      filtered = filterByDate(filtered, from, to);
    }

    setFilteredMoney(filtered);
  };

  const filterByDate = (data, from, to) => {
    return data.filter((item) => {
      const [day, month, year] = item.date.split('.');
      const itemDate = new Date(`${year}-${month}-${day}`);
      return itemDate >= from && itemDate <= to;
    });
  };

  const handleFilter = (range) => {
    if (!range?.from || !range?.to) {
      setCustomDateRange(null);
      return;
    }
    setCustomDateRange(range);
  };

  return (
    <>
      <WithdrawalSection title="Вывод средств" stats={withdrawalMock} />
      <LinkWrapper>
        <FilterWrapper>
          <LinksTabs tabs={tabs} value={activeTab} onChange={setActiveTab} />
          <LinksFilterPanel onFilter={handleFilter} />
        </FilterWrapper>
        {filteredMoney.length === 0 ? (
          <EmptyPlaceholder
            icon={linkIcon}
            count={0}
            title="У вас ещё нет данных"
            subtitle="Чтобы провести анализ и начать работать с трафиком, создайте ссылку"
          />
        ) : (
          <MoneyList items={filteredMoney} />
        )}
      </LinkWrapper>
      {isModalOpen && <WithdrawalModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
};

export default Withdrawal;
