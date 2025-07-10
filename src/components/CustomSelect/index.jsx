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

const tabs = ['Все ссылки', 'Избранные', 'Архив', 'Junior', 'Senior'];

const SelectDropdown = ({ value, onChange }) => {
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
                {tabs.map((tab) => (
                  <Listbox.Option key={tab} value={tab} as={DropdownOption}>
                    {({ selected }) => <span>{tab}</span>}
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

export default SelectDropdown;
