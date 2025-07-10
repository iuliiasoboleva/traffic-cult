import DatePicker from 'react-datepicker';

import styled from 'styled-components';

import calendarIcon from '../../assets/images/icons/calendar.svg';

export const FilterGroup = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  flex-wrap: nowrap;
  width: 100%;
  justify-content: flex-end;
`;

export const InputBlock = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const DateInput = styled(DatePicker)`
  background-color: #18191c;
  cursor: pointer;
  border-radius: 9px;
  padding: 12px 16px;
  border: none;
  width: 150px;
  height: 49px;
  display: flex;
  color: #585b6b;
  font-family: 'Inter Tight', sans-serif;
  outline: none;

  &::placeholder {
    font-weight: 500;
    font-size: 16px;
    font-family: 'Inter Tight', sans-serif;
    color: #585b6b;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  /* Скрыть дефолтную иконку DatePicker */
  .react-datepicker__calendar-icon {
    display: none;
  }

  /* Кастомная иконка */
  background-image: url(${calendarIcon});
  background-repeat: no-repeat;
  background-position: right 16px center;
  background-size: 18px 18px;
`;

export const Button = styled.button`
  background-color: ${({ disabled }) => (disabled ? '#2C3036' : '#F24822')};
  color: white;
  border: none;
  border-radius: 9px;
  padding: 12px 16px;
  font-weight: 500;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: background-color 0.2s;
  height: 49px;
  font-family: 'Inter Tight', sans-serif;
  font-size: 16px;
  max-width: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FilterButton = styled.button`
  width: 78px;
  border-radius: 6px;
  padding: 8px 10px;
  gap: 5px;
  border: 0.5px solid #2c3036;
  font-family: 'Inter Tight', sans-serif;
  font-weight: 500;
  font-size: 12px;
  background-color: #2c3036;
  color: white;
  cursor: pointer;
  transition: background-color 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
`;
