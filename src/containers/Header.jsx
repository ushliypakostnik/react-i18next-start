import React, { Component } from "react";
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import { rememberLanguage } from '../utils/storage';
import { LANGUAGES } from '../store/constants';
import { setLanguage } from '../store/modules/utils/actions';

import '../scss/components/_header.scss';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      language: null,
    };
  }

  static getDerivedStateFromProps = (nextProps, prevState) => ({
    language: nextProps.language,
  });

  componentDidMount() {
    // for test
  }

  setLanguage = language => {
    this.props.setLanguage(language);
    rememberLanguage(language);
  };

  render() {
    const { t, i18n, language } = this.props;

    const changeLanguage = lang => {
      if (language !== lang) {
        i18n.changeLanguage(lang);
        this.setLanguage(lang);
      }
    };

    return (
      <div className="page__header header">
        <h3>{ t('title') }</h3>
        {LANGUAGES.map((language, index) => {
          return (
            <button
              key={index}
              onClick={() => changeLanguage(language.name)}
            >{language.name}</button>
          );
        })}
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  language: state.rootReducer.utils.language,
});

const mapDispatchToProps = (dispatch) => ({
  setLanguage: (language) => dispatch(setLanguage(language)),
});

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(Header));
