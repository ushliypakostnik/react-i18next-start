import React, { PureComponent } from "react";
import { NavLink } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

import { DESIGN } from '../../store/constants';

import '../../scss/components/layout/_menu.scss';

class Menu extends PureComponent {

  render() {
    const { t } = this.props;
    const views = DESIGN.VIEWS;

    return (
      <nav role="navigation" className="menu">
        <ul role="menu">
          {views.map((view, index) => {
            return (
              <li role="presentation" key={index}>
                <NavLink
                  to={view.path}
                  role="menuitem"
                >
                  {t(`views.${view.name}.name`)}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
};

export default withTranslation()(Menu);
