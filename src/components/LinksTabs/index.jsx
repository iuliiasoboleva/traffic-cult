import React from 'react';
import { isMobile } from 'react-device-detect';

import CustomSelect from '../CustomSelect';
import { TabButton, TabsWrapper } from './styles';

const tabs = ['Все ссылки', 'Избранные', 'Архив', 'Junior', 'Senior'];

const LinksTabs = ({ value, onChange }) => {
  return isMobile ? (
    <CustomSelect value={value} onChange={(e) => onChange(e.target.value)} options={tabs} />
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
