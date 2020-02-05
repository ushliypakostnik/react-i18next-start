import React, { PureComponent } from "react";
import { withTranslation } from 'react-i18next';
import PropTypes from "prop-types";
import { compose } from "redux";

import withLanguage from '../hoc/withLanguage';

import '../../scss/components/utils/_paragraph.scss';

class Paragraph extends PureComponent {
  render() {
    const { text, language } = this.props;

    return (
      <p className="paragraph" dangerouslySetInnerHTML={{ __html: text[language] }} />
    );
  }
};

Paragraph.propTypes = {
  text: PropTypes.object.isRequired,
};

const Composed = compose(
  withTranslation(),
  withLanguage,
);

export default Composed(Paragraph);
