import { combineReducers } from 'redux';
import home from '../pages/home/reducer';

const reducers = {
  home,
};

export const state = combineReducers(reducers);