import React, { PureComponent } from "react";
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import { acceptStorageMessage } from '../../store/modules/utils/actions';

import '../../scss/components/layout/_storage-message.scss';

const STORAGE_MESSAGE_CLASS = 'storage-message';

class StorageMessage extends PureComponent {
  render() {
    const { t } = this.props;

    return (
      <div
        className={STORAGE_MESSAGE_CLASS}
        id={STORAGE_MESSAGE_CLASS}
        role="dialog"
        >
        <div className="container">
          <div className={`${STORAGE_MESSAGE_CLASS}__text`}>
            {t('layout.storage-message.text')}
          </div>
          <button
            type="button"
            className="btn btn--transparent"
            onClick={() => this.props.acceptStorageMessage()}
          >{t('layout.storage-message.button')}</button>
        </div>
      </div>
    );
  }
};

const mapDispatchToProps = (dispatch) => ({
  acceptStorageMessage: () => dispatch(acceptStorageMessage()),
});

export default withTranslation()(connect(null, mapDispatchToProps)(StorageMessage));
