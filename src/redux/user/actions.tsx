import TYPES from './contants';
import { SignUpUserInputDataType, LogInUserInputDataType } from './types';

export const signUpInit = (userInputData: SignUpUserInputDataType) => ({
  type: TYPES.SIGN_UP_INIT,
  payload: userInputData,
});

export const signUpSucceed = (payload: object) => ({
  type: TYPES.SIGN_UP_SUCCEED,
  payload,
});

export const signUpFailed = (payload: object) => ({
  type: TYPES.SIGN_UP_FAILED,
  payload,
});

export const logInInit = (payload: LogInUserInputDataType) => ({
  type: TYPES.LOG_IN_INIT,
  payload,
});

export const logInSucceed = (payload: object) => ({
  type: TYPES.LOG_IN_SUCCEED,
  payload,
});

export const logInFailed = (payload: object) => ({
  type: TYPES.LOG_IN_FAILED,
  payload,
});

export const cleanUpUserData = () => ({
  type: TYPES.CLEAN_UP_USER_DATA,
});
