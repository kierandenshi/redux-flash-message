import { typeValueAction as createAction } from 'core/utils';

const prefix = (name) => `redux-flash-message/${name}`;

export const FLASH_MESSAGE_SHOW = prefix('FLASH_MESSAGE_SHOW');
export const showFlashMessage = createAction(FLASH_MESSAGE_SHOW);

export const FLASH_MESSAGE_TIMEOUT = prefix('FLASH_MESSAGE_TIMEOUT');
export const timeoutFlashMessage = createAction(FLASH_MESSAGE_TIMEOUT);

export const FLASH_MESSAGE_HIDE = prefix('FLASH_MESSAGE_HIDE');
export const hideFlashMessage = createAction(FLASH_MESSAGE_HIDE);

export const FLASH_MESSAGE_DELETE = prefix('FLASH_MESSAGE_DELETE');
export const deleteFlashMessage = createAction(FLASH_MESSAGE_DELETE);
