import * as React from 'react';
import { SearchLayout } from './Search/SearchLayout';
import { ServiceLayout } from './Service/ServiceLayout';
import './TopPageContainer.scss';

const TopPageContainer = (): JSX.Element => {
  return (
    <div className="toppage">
      <SearchLayout />
      <ServiceLayout />
    </div>
  )
}

export default TopPageContainer;