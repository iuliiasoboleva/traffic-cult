import React from 'react';

import { subDays } from 'date-fns';
import { ru } from 'date-fns/locale';

import { Button, DateInput, Handle, Overlay, Sheet, Title } from './styles';

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
        <Handle />
        <Title>Фильтр</Title>
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
          withPortal
        />
        <DateInput
          locale={ru}
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          minDate={startDate || undefined}
          maxDate={today}
          placeholderText="дд.мм.гггг"
          dateFormat="dd.MM.yyyy"
          withPortal
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
