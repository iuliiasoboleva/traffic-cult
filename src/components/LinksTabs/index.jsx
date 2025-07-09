import React from 'react';
import { isMobile } from 'react-device-detect';

import { Select, TabButton, TabsWrapper } from './styles';

const tabs = ['Все ссылки', 'Избранные', 'Архив', 'Junior', 'Senior'];

const LinksTabs = ({ value, onChange }) => {
  return isMobile ? (
    <Select value={value} onChange={(e) => onChange(e.target.value)}>
      {tabs.map((tab) => (
        <option key={tab} value={tab}>
          {tab}
        </option>
      ))}
    </Select>
  ) : (
    <TabsWrapper>
      {tabs.map((tab) => (
        <TabButton key={tab} isActive={value === tab} onClick={() => onChange(tab)}>
          {tab}
        </TabButton>
      ))}
    </TabsWrapper>
  );
};

export default LinksTabs;
