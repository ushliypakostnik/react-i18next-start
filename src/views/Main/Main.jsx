import React, { Fragment } from "react";
import { useTranslation } from 'react-i18next';

import '../../scss/views/_page.scss';

const Main = () => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <section className="page--main">
        <div className="container">
          <h2>{t('views.main.title')}</h2>
        </div>
      </section>
    </Fragment>
  );
};

export default Main;
