import DatePicker from 'react-datepicker';

import styled from 'styled-components';

import calendarIcon from '../../assets/images/icons/calendar.svg';

export const Sheet = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(24, 25, 28, 1);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.4);
  padding: 24px;
  z-index: 1000;

  max-height: 100dvh;
  overflow-y: auto;

  @supports not (height: 100dvh) {
    max-height: 100vh;
  }

  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: stretch;
`;

export const Handle = styled.div`
  width: 107px;
  height: 4px;
  background: rgba(33, 34, 38, 1);
  border-radius: 26px;
  align-self: center;
  margin-bottom: 12px;
`;

export const Title = styled.h3`
  font-family: 'Inter Tight', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
`;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;

export const DateInput = styled(DatePicker)`
  background-color: rgba(18, 19, 21, 1);
  cursor: pointer;
  border-radius: 9px;
  padding: 12px 16px;
  border: none;
  width: 100%;
  height: 49px;
  display: flex;
  color: #585b6b;
  font-family: 'Inter Tight', sans-serif;
  outline: none;

  &::placeholder {
    font-weight: 500;
    font-size: 14px;
    font-family: 'Inter Tight', sans-serif;
    color: rgba(88, 91, 107, 1);
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
  background-size: 14px 14px;
`;

export const Button = styled.button`
  width: 100%;
  background-color: ${({ disabled }) => (disabled ? '#2C3036' : '#F24822')};
  height: 45px;
  width: 100%;
  color: white;
  font-family: 'Inter Tight', sans-serif;
  font-weight: 500;
  font-size: 12px;
  line-height: 100%;
  border-radius: 9px;
  border: none;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: background-color 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
`;
