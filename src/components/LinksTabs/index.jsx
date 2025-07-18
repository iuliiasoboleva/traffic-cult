import React from 'react';

import useIsTablet from '../../hooks/useIsTablet';
import CustomSelect from '../CustomSelect';
import { TabButton, TabsWrapper } from './styles';

const LinksTabs = ({ tabs, value, onChange }) => {
  const isTablet = useIsTablet();

  return isTablet ? (
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
