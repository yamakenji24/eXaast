import * as React from 'react';
import { ServiceItem } from './component/ServiceItem';

const items = [
  { title: 'Service Title1'},
  { title: 'Service Title2'}
]

export const ServiceLayout = (): JSX.Element => {
  return (
    <div className="service">
      <div className="service__items">
        {items.map(item => (
          <ServiceItem title={item.title} key={item.title} />
        ))}
      </div>
    </div>
  )
}