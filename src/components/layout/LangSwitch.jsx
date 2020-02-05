import React, { PureComponent } from "react";
import classNames from 'classnames';
import { connect } from 'react-redux';
import { compose } from "redux";

import { rememberLanguage } from '../../utils/storage';
import { LANGUAGES } from '../../store/constants';
import { setLanguage } from '../../store/modules/utils/actions';

import withLanguage from '../hoc/withLanguage';

import '../../scss/components/layout/_language-switch.scss';

const LANG_SWITCH = 'language-switch';

class LangSwitch extends PureComponent {
  componentDidMount() {
    window.addEventListener('keypress', this.onKeyPress);
  };

  componentWillUnmount() {
    window.removeEventListener('keypress', this.onKeyPress);
  };

  onKeyPress = (e) => {
    if (e.keyCode === 13 && e.target.classList.contains(LANG_SWITCH)) {
      e.preventDefault();
      this.toogleButtonState();
    }
  };

  getButtonState = () => {
    const { language } = this.props;

    if (language === LANGUAGES[0].name) return false;
    return true;
  };

  toogleButtonState = () => {
    const language = this.getButtonState() ? LANGUAGES[0].name : LANGUAGES[1].name;

    this.props.setLanguage(language);
    rememberLanguage(language);
  };

  render() {
    const buttonClasses = classNames(
      LANG_SWITCH,
      { [`${LANG_SWITCH}--active`]: this.getButtonState() },
    );

    return (
      <button
        id={LANG_SWITCH}
        type="button"
        className={buttonClasses}
        onClick={() => this.toogleButtonState()}
      >
        <div className={`${LANG_SWITCH}__active`} />
        <ul>
          <li>{LANGUAGES[0].name}</li>
          <li>{LANGUAGES[1].name}</li>
        </ul>
      </button>
    );
  };
};

const mapDispatchToProps = (dispatch) => ({
  setLanguage: (language) => dispatch(setLanguage(language)),
});

const Composed = compose(
  connect(null, mapDispatchToProps),
  withLanguage,
);

export default Composed(LangSwitch);
