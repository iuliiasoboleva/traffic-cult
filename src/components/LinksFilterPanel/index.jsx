import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { isMobile } from 'react-device-detect';

import { subDays } from 'date-fns';
import { ru } from 'date-fns/locale';

import FilterBottomSheet from '../FilterBottomSheet';
import { Button, DateInput, FilterGroup, Wrapper } from './styles';

const today = new Date();
const yesterday = subDays(today, 1);

const LinksFilterPanel = ({ onFilter }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [showMobileFilter, setShowMobileFilter] = useState(false);

  const isValid = startDate && endDate && startDate <= endDate;

  const handleSearch = () => {
    if (isValid) {
      onFilter({ from: startDate, to: endDate });
    }
  };

  if (isMobile) {
    return (
      <>
        <Button onClick={() => setShowMobileFilter(true)}>Фильтр</Button>
        <FilterBottomSheet
          visible={showMobileFilter}
          onClose={() => setShowMobileFilter(false)}
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
    <Wrapper>
      <FilterGroup>
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
          placeholderText="ДД.ММ.ГГГГ"
          dateFormat="dd.MM.yyyy"
        />

        <DateInput
          locale={ru}
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          minDate={startDate || undefined}
          maxDate={today}
          placeholderText="ДД.ММ.ГГГГ"
          dateFormat="dd.MM.yyyy"
        />

        <Button onClick={handleSearch} disabled={!isValid}>
          Найти
        </Button>
      </FilterGroup>
    </Wrapper>
  );
};

export default LinksFilterPanel;
