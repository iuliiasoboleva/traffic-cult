import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';

import { subDays } from 'date-fns';
import { ru } from 'date-fns/locale';

import calendarIcon from '../../assets/images/icons/white-calendar.svg';
import useIsTablet from '../../hooks/useIsTablet';
import FilterBottomSheet from '../FilterBottomSheet';
import { Button, DateInput, FilterButton, FilterGroup, InputBlock } from './styles';

const today = new Date();
const yesterday = subDays(today, 1);

const LinksFilterPanel = ({ onFilter }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [showTabletFilter, setShowTabletFilter] = useState(false);

  const isValid = startDate && endDate && startDate <= endDate;
  const isTablet = useIsTablet();

  const handleSearch = () => {
    if (isValid) {
      onFilter({ from: startDate, to: endDate });
    }
  };

  if (isTablet) {
    return (
      <>
        <FilterButton onClick={() => setShowTabletFilter(true)}>
          <img src={calendarIcon} alt="Календарь" width={15} height={15} />
          <span>Фильтр</span>
        </FilterButton>
        <FilterBottomSheet
          visible={showTabletFilter}
          onClose={() => setShowTabletFilter(false)}
          startDate={startDate}
          endDate={endDate}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
          onSearch={handleSearch}
          isValid={isValid}
        />
      </>
    );
  }

  return (
    <FilterGroup>
      <InputBlock>
        <DateInput
          locale={ru}
          selected={startDate}
          onChange={(date) => {
            setStartDate(date);
            if (endDate && date > endDate) {
              setEndDate(null);
            }
          }}
          maxDate={yesterday}
          placeholderText="дд.мм.гггг"
          dateFormat="dd.MM.yyyy"
        />

        <DateInput
          locale={ru}
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          minDate={startDate || undefined}
          maxDate={today}
          placeholderText="дд.мм.гггг"
          dateFormat="dd.MM.yyyy"
        />
      </InputBlock>

      <Button onClick={handleSearch} disabled={!isValid}>
        Найти
      </Button>
    </FilterGroup>
  );
};

export default LinksFilterPanel;
