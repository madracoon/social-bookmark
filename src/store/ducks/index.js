import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects'

import * as profile from './profile';
import * as checkProfiles from './checkProfiles'

export const reducer = combineReducers({
  profile: profile.reducer,
  checkProfiles: checkProfiles.reducer
});

export const actions = {
  profile: profile.actions,
  checkProfiles: checkProfiles.actions
};

export function* rootSaga() {
  yield all([
    ...checkProfiles.sagas,
    ...profile.sagas
  ]);
}