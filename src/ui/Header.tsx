import * as React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

export const Header = ():JSX.Element => {
  return (
    <div className="header">
      <h3 className="header__name">eXaast</h3>
    </div>
  )
}