import React, { Component } from "react";
import { connect } from 'react-redux';

import ReactResizeDetector from 'react-resize-detector';

import { DESIGN } from '../../store/constants';

import { resize } from '../../store/modules/utils/actions';

import ScreenHelper from '../../utils/_screen-helper';

import '../../scss/components/layout/_resize.scss';

class Resize extends Component {
  //constructor(props) {
  //  super(props);
  //  this.scrollbarWidth = null;
  //}

  //componentDidMount() {
  //  this.scrollbarWidth = ScreenHelper.getScrollbarWidth();
  //}

  getDeviceType = () => {
    if (ScreenHelper.isDesktop()) {
      return DESIGN.DEVICES_TYPES[0];
    } else if (ScreenHelper.isSM()) {
      return DESIGN.DEVICES_TYPES[1];
    } else {
      return DESIGN.DEVICES_TYPES[2];
    }
  };

  onResize = () => {
    this.props.resize(this.getDeviceType());
  };

  render() {
    return (
      <div className="resize">
        <ReactResizeDetector handleWidth handleHeight onResize={this.onResize} />
      </div>
    );
  };
}

const mapDispatchToProps = (dispatch) => ({
  resize: (deviceType) => dispatch(resize(deviceType))
});

export default connect(null, mapDispatchToProps)(Resize);
