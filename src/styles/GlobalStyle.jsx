import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  /* Reset */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    min-height: 100vh;
    height: auto;
    overflow-x: hidden;
    overscroll-behavior-y: none;
    font-family: 'Inter', sans-serif;
    background-color: #121315;
    color: #FFFFFF;
  }

  #root {
    min-height: 100vh;
    height: auto;
    position: relative;
    z-index: 0;
  }

  button {
    all: unset;
    cursor: pointer;
    box-sizing: border-box;
  }

  .react-datepicker {
    background-color: #0c0e10;
    border: none;
    color: #fff;
  }

  .react-datepicker__header {
    background-color: #0c0e10;
    border-bottom: 1px solid #333;
  }

  .react-datepicker__current-month,
  .react-datepicker__day-name {
    color: #fff;
  }

  .react-datepicker__day {
    color: #ccc;
    &:hover {
      background-color: #333;
      color: #fff;
    }
  }

  .react-datepicker__day--selected,
  .react-datepicker__day--keyboard-selected {
    background-color: #F24822;
    color: #fff;
  }

  .react-datepicker__day--disabled {
    color: #555;
  }

  .react-datepicker__triangle {
    display: none;
  }
  
  [data-headlessui-state] {
    outline: none !important;
    box-shadow: none !important;
  }

  [data-headlessui-state]:focus-visible {
    outline: none !important;
    box-shadow: none !important;
  }

  .headlessui-listbox-button:focus,
  .headlessui-listbox-option:focus {
    outline: none !important;
    box-shadow: none !important;
  }

  .headlessui-listbox-button:focus-visible,
  .headlessui-listbox-option:focus-visible {
    outline: none !important;
    box-shadow: none !important;
  }
`;
