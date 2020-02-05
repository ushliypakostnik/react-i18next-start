import React, { PureComponent } from "react";
import { compose } from "redux";
import { connect } from 'react-redux';

const withDeviceType = (Component) => {
  return class extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        deviceType: null,
      };
    };

    static getDerivedStateFromProps = (nextProps, prevState) => ({
      deviceType: nextProps.deviceType,
    });

    render() {
      const { deviceType } = this.state;

      return <Component deviceType={deviceType} {...this.props} />;
    };
  };
}

const mapStateToProps = (state) => ({
  deviceType: state.rootReducer.utils.deviceType,
});

const Composed = compose(
  connect(mapStateToProps, null),
  withDeviceType,
);

export default Composed;
