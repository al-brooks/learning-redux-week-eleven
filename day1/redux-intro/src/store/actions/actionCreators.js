import * as actionTypes from './actionTypes';

export const incrementCounter = () => {
  return {
    type: actionTypes.INCREMENT
  };
};

export const decrementCounter = () => {
  return {
    type: actionTypes.DECREMENT
  };
};

export const addValue = (value) => {
  return {
    type: actionTypes.ADD,
    payload: value
  };
};

export const subValue = (value) => {
  return {
    type: actionTypes.SUB,
    payload: value
  };
};
