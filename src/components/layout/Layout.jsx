import React, { Component, Fragment } from "react";
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { compose } from "redux";

import { DESIGN } from '../../store/constants';

import Resize from './Resize';
import Header from './Header';
import StorageMessage from './StorageMessage';
import ScrollToTop from '../utils/ScrollToTop';
import Main from '../../views/Main/Main';
import Page404 from '../../views/Page404';

import '../../scss/components/layout/_layout.scss';

const BEFORE_LANG_SWITCH_CLASS = 'before-language-switch';
const LANG_SWITCH = 'language-switch';

class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAcceptStorageMessage: null,
    };
  };

  static getDerivedStateFromProps = (nextProps, prevState) => ({
    isAcceptStorageMessage: nextProps.isAcceptStorageMessage,
  });

  goodHeight() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  componentDidMount() {
    this.goodHeight();
    window.addEventListener('resize', () => {this.goodHeight()});
    window.addEventListener('keydown', this.onKeyDown);
  };

  componentWillUnmount() {
    window.removeEventListener('resize', () => {this.goodHeight()});
    window.removeEventListener('keydown', this.onKeyDown);
  };

  // Accessibility fix for tab focus on YandexMap
  onKeyDown = (e) => {
    let el;

    if (e.keyCode === 9 && e.target.classList.contains(BEFORE_LANG_SWITCH_CLASS)) {
      e.preventDefault();
      el = document.getElementById(LANG_SWITCH);
      if (el) el.focus();
    }
  };

  render() {
    const { isAcceptStorageMessage } = this.state;

    return (
      <Fragment>
        <div className="layout" id="layout">
          <Resize />
          {!isAcceptStorageMessage && <StorageMessage />}
          <BrowserRouter>
            <ScrollToTop />
            <Fragment>
              <Header />
              <main role="main">
                <Switch>
                  <Redirect exact from='/' to='/main'/>
                  <Route path={ DESIGN.VIEWS[0].path } component={ Main } />
                  <Route component={ Page404 } />
                </Switch>
               </main>
             </Fragment>
          </BrowserRouter>
        </div>
      </Fragment>
    );
  };
};

const mapStateToProps = (state) => ({
  isAcceptStorageMessage: state.rootReducer.utils.isAcceptStorageMessage,
});

const Composed = compose(
  withTranslation(),
  connect(mapStateToProps, null),
);

export default Composed(Layout);
