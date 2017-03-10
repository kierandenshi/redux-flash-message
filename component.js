import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import {
  deleteFlashMessage,
  hideFlashMessage,
  timeoutFlashMessage,
} from './actions';

import './component.scss';

class FlashMessage extends Component {

  componentWillReceiveProps(nextProps) {
    const { messages } = nextProps;
    Object.keys(messages).forEach(messageId => {
      if(messages[messageId].timeout) {
        this.handleSetTimeout(messageId);
      }
    });
  }

  handleSetTimeout(id) {
    this.props.timeoutFlashMessage(id);
    setTimeout(() => {this.handleDismiss(id);}, 3000);
  }

  handleDismiss(id) {
    this.props.hideFlashMessage(id);
    setTimeout(() => {this.handleDelete(id);}, 1000);
  }

  handleDelete(id) {
    this.props.deleteFlashMessage(id);
  }

  renderMessages() {
    const { messages } = this.props;

    return Object.keys(messages).map(messageId => {
      const { id, className, text, dismissable, visible } = messages[messageId];
      return (
        <div className={`flash-message__message ${visible ? 'visible' : 'hidden'} ${className ? className : ''}`}>
          <div className={'flash-message__text'}>{text}</div>
          {dismissable && (
            <div className={'flash-message__dismiss'} onClick={() => {this.handleDismiss(id);}} />
          )}
        </div>
      );
    });
  }

  render() {

    return (
      <div className={'flash-message'}>
        {this.renderMessages()}
      </div>
    );

  }

}

FlashMessage.propTypes = {
  messages: PropTypes.array,
};

export default connect(
  (state) => ({
    messages: state.flashMessage,
  }),
  {
    deleteFlashMessage,
    hideFlashMessage,
    timeoutFlashMessage,
  }
)(FlashMessage);
