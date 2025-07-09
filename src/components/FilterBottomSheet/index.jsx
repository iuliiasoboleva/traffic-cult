import React from 'react';

import { subDays } from 'date-fns';
import { ru } from 'date-fns/locale';

import { Button, DateInput, Overlay, Sheet } from './styles';

const today = new Date();
const yesterday = subDays(today, 1);

const FilterBottomSheet = ({
  visible,
  onClose,
  startDate,
  endDate,
  setStartDate,
  setEndDate,
  onSearch,
  isValid,
}) => {
  if (!visible) return null;

  return (
    <>
      <Overlay onClick={onClose} />
      <Sheet>
        <h3 style={{ color: 'white', marginBottom: 16 }}>Фильтр</h3>
        <DateInput
          locale={ru}
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          maxDate={yesterday}
          placeholderText="ДД.ММ.ГГГГ"
          dateFormat="dd.MM.yyyy"
        />
        <DateInput
          locale={ru}
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          maxDate={today}
          placeholderText="ДД.ММ.ГГГГ"
          dateFormat="dd.MM.yyyy"
        />
        <Button
          disabled={!isValid}
          onClick={() => {
            onSearch();
            onClose();
          }}
        >
          Найти
        </Button>
      </Sheet>
    </>
  );
};

export default FilterBottomSheet;
