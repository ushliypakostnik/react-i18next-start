import React, { PureComponent } from "react";

const withPath = (Component) => {
  return class extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        path: null,
      };
    };

    componentDidMount() {
      const { pathname } = this.props.location;
      const paths = pathname.split('/');
      const path = paths[paths.length - 1];
      this.setState({ path: path });
    };

    render() {
      const { path } = this.state;

      return <Component path={path} {...this.props} />;
    };
  };
}

export default withPath;
