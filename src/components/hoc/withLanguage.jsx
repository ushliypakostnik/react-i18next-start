import React, { PureComponent } from "react";
import { compose } from "redux";
import { connect } from 'react-redux';

const withLanguage = (Component) => {
  return class extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        language: null,
      };
    };

    static getDerivedStateFromProps = (nextProps, prevState) => ({
      language: nextProps.language,
    });

    render() {
      const { language } = this.state;

      return <Component language={language} {...this.props} />;
    };
  };
}

const mapStateToProps = (state) => ({
  language: state.rootReducer.utils.language,
});

const Composed = compose(
  connect(mapStateToProps, null),
  withLanguage,
);

export default Composed;
