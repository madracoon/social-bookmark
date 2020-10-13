import { put, takeLatest, call } from 'redux-saga/effects'
import { actions } from './slice'
import axios from 'axios';

function isExist(status) {
  return status.toString() == '404' ? false : true;
}

function* checkProfiles({ payload }) {
  let existing = {
    github: false,
    instagram: false
  }

  try {
    const responseInstagram = yield call(
      [axios, 'get'],
      `https://www.instagram.com/${payload.username}/`,
    )
    existing.instagram = isExist(responseInstagram);
    
    const responseGithub = yield call(
      [axios, 'get'],
      `https://www.github.com/${payload.username}/`,
    )
    existing.github = isExist(responseGithub);

    yield put(actions.profilesChecked(existing))
  } catch (error) {
    console.log(error)
  } finally {
    yield put(actions.profilesChecked(existing))
  }
}

export default [
  takeLatest(actions.profilesChecking, checkProfiles),
]