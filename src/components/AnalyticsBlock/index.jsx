import React from 'react';

import greenUpIcon from '../../assets/images/icons/green-up.svg';
import redDownIcon from '../../assets/images/icons/red-down.svg';
import usersIcon from '../../assets/images/icons/users.svg';
import { BlockPercent, BlockStat, BlockSubtitle, BlockTitle, BlockWrapper } from './styles';

const AnalyticsBlock = ({ title, subtitle, value, percent, isGrowth, icon }) => {
  return (
    <BlockWrapper $bg={icon}>
      <div>
        <BlockTitle>{title}</BlockTitle>
        <BlockSubtitle>{subtitle}</BlockSubtitle>
      </div>
      <BlockStat>
        <img src={usersIcon} alt="Users" />
        <span>{value}</span>
        <BlockPercent $growth={percent.isGrowth}>
          <span>{percent.value} %</span>
          <img src={percent.isGrowth ? greenUpIcon : redDownIcon} alt="Up and down arrow" />
        </BlockPercent>
      </BlockStat>
    </BlockWrapper>
  );
};

export default AnalyticsBlock;
