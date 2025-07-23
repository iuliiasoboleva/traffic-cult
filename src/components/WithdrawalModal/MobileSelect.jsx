import React, { useState } from 'react';

import { Listbox } from '@headlessui/react';

import chevronDownIcon from '../../assets/images/icons/arrow-down.svg';
import chevronUpIcon from '../../assets/images/icons/arrow-up.svg';
import {
  ArrowImg,
  DropdownButton,
  DropdownOption,
  DropdownOptions,
  DropdownWrapper,
} from './styles';

const MobileSelect = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownWrapper>
      <Listbox value={value} onChange={onChange}>
        {({ open }) => {
          if (open !== isOpen) setIsOpen(open);
          return (
            <>
              <Listbox.Button as={DropdownButton} $isOpen={open}>
                {value}
                <ArrowImg src={open ? chevronUpIcon : chevronDownIcon} alt="стрелка" />
              </Listbox.Button>

              <Listbox.Options as={DropdownOptions}>
                {options.map((option) => (
                  <Listbox.Option key={option} value={option} as={DropdownOption}>
                    {({ selected }) => (
                      <div className="option-with-dot">
                        <span>{option}</span>
                        <span className="dot" />
                      </div>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </>
          );
        }}
      </Listbox>
    </DropdownWrapper>
  );
};

export default MobileSelect;
