import DatePicker from 'react-datepicker';

import styled from 'styled-components';

export const Sheet = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #121315;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.4);
  padding: 24px;
  z-index: 1000;

  max-height: 100dvh;
  overflow-y: auto;

  @supports not (height: 100dvh) {
    max-height: 100vh; /* fallback для старых браузеров */
  }
`;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
`;

export const DateInput = styled(DatePicker)`
  background-color: #1a1a1a;
  color: white;
  border: 1px solid #2c2c2c;
  border-radius: 8px;
  padding: 10px;
  font-size: 14px;
  width: 100%;
  margin-bottom: 12px;
`;

export const Button = styled.button`
  width: 100%;
  background-color: ${({ disabled }) => (disabled ? '#3a3a3a' : '#F24822')};
  color: white;
  padding: 12px;
  font-weight: 600;
  font-size: 16px;
  border-radius: 8px;
  border: none;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;
