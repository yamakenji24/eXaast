import * as React from 'react';

interface Props {
  title: string
}

// XaaSサービス１個ずつをいい感じに表示する予定
export const ServiceItem = ({title}: Props): JSX.Element => {
  return (
    <div className="service">
      <h3>{title}</h3>
      <p>descriptions</p>
      <p>tag list</p>
    </div>
  )
}