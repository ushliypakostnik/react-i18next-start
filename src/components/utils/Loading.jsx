import React from "react";
import classNames from 'classnames';
import PropTypes from "prop-types";

import '../../scss/components/utils/_loading.scss';

import Loader from './Loader';

const Loading = ({width, height, size, className}) => {
  const style = {
    width: `${width}px`,
    height: `${height}px`,
  };

  const loagingClasses = classNames(
    'loading',
    className,
  );

  return (
    <div
      className={loagingClasses}
      style={width && height ? style : null}
    >
      <Loader size={size} />
    </div>
  );
};

Loading.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  size: PropTypes.number,
  className: PropTypes.string,
};

export default Loading;
