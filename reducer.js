import {
  FLASH_MESSAGE_SHOW,
  FLASH_MESSAGE_HIDE,
  FLASH_MESSAGE_DELETE,
  FLASH_MESSAGE_TIMEOUT,
} from './actions.js';

const initialState = {};

export default (state = initialState, { type, value })=>{
  switch(type) {

  case FLASH_MESSAGE_SHOW:
    const messageId = `fm${Date.now()}`;
    return {
      ...state,
      [messageId]: {
        id: messageId,
        visible: true,
        dismissable: value.dismissable || true,
        text: value.text || '',
        timeout: value.timeout || false,
        className: value.className || null,
      },
    };

  case FLASH_MESSAGE_TIMEOUT:
    return {
      ...state,
      [value]: {
        ...state[value],
        timeout: false,
      },
    };

  case FLASH_MESSAGE_HIDE:
    return {
      ...state,
      [value]: {
        ...state[value],
        visible: false,
      },
    };

  case FLASH_MESSAGE_DELETE:
    return Object.keys(state).reduce((memo, id) => {
      if(id !== value) {
        memo[id] = state[id];
      }
      return memo;
    }, {});

  default:
    return state;

  }
};
