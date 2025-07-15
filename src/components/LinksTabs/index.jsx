import React from 'react';

import useIsMobile from '../../hooks/useIsMobile';
import CustomSelect from '../CustomSelect';
import { TabButton, TabsWrapper } from './styles';

const tabs = ['Все ссылки', 'Избранные', 'Архив', 'Junior', 'Senior'];

const LinksTabs = ({ value, onChange }) => {
  const isMobile = useIsMobile();

  return isMobile ? (
    <CustomSelect value={value} onChange={onChange} options={tabs} />
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
