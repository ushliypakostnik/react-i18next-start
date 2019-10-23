import React from "react";

import '../scss/components/_page.scss';

const Layout = props => (
  <div className="page">
    <main role="main">{props.children}</main>
  </div>
);

export default Layout;
