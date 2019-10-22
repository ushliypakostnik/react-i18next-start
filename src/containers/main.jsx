import React, { Component } from "react";
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import { LANGUAGES } from '../store/constants';
import { setLanguage } from '../store/modules/utils/actions';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      language: null,
    };
  }

  static getDerivedStateFromProps = (nextProps, prevState) => ({
    language: nextProps.isAuth,
  });

  componentDidMount() {
    // for test
  }

  setLanguage = language => {
    this.props.setLanguage(language);
  };

  render() {
    const { t, i18n } = this.props;

    const changeLanguage = language => {
      i18n.changeLanguage(language);
      this.setLanguage(language);
    };

    return (
      <div className="page-center">
        <div className="message">
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

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(Main));
