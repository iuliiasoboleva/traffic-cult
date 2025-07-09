import DatePicker from 'react-datepicker';

import styled from 'styled-components';

import calendarIcon from '../../assets/images/icons/calendar.svg';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;

  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`;

export const FilterGroup = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  flex-wrap: wrap;
`;

export const DateInput = styled(DatePicker)`
  background-color: #151518;
  cursor: pointer;
  color: #a5a5b0;
  border-radius: 12px;
  padding: 12px 38px 12px 16px;
  font-size: 16px;
  border: none;
  font-family: Inter Tight;
  font-weight: 500;
  line-height: 100%;
  width: 150px;
  position: relative;
  outline: none;
  appearance: none;

  &::placeholder {
    color: #585b6b;
  }

  /* Скрыть дефолтную иконку DatePicker */
  .react-datepicker__calendar-icon {
    display: none;
  }

  /* Кастомная иконка */
  background-image: url(${calendarIcon});
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 16px 16px;
`;

export const Button = styled.button`
  background-color: ${({ disabled }) => (disabled ? '#3a3a3a' : '#F24822')};
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-weight: 500;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: background-color 0.2s;
  height: 49px;
`;
