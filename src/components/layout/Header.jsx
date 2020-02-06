import React from "react";
// import { Link } from 'react-router-dom';

import '../../scss/components/layout/_header.scss';

import LangSwitch from './LangSwitch';
// import Burger from './Burger';
// import Panel from './Panel';
import Menu from './Menu';

const HEADER_CLASS = 'header';

const Header = () => (
  <header
    className={`${HEADER_CLASS}`}
    id={`${HEADER_CLASS}`}
    role="banner"
  >
    <div className="container">
      {/* <Link to="/" className={`${HEADER_CLASS}__logo`} /> */}
      <div className={`${HEADER_CLASS}__right`}>
        <Menu />
        <LangSwitch />
        {/* <Burger />
        <Panel />*/}
      </div>
    </div>
  </header>
);

export default Header;
