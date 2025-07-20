import React from 'react';

import emptyLinkIcon from '../../assets/images/icons/empty-link.svg';
import EmptyPlaceholder from '../../components/EmptyPlaceholder';

const NotFound = () => {
  return <EmptyPlaceholder icon={emptyLinkIcon} count={0} title="Страница не найдена" />;
};

export default NotFound;
