import { put, takeLatest, call } from 'redux-saga/effects'
import { actions } from './slice'

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* requestPic() {
  try {
    const data = yield call(() => {
      return fetch('https://picsum.photos/200/300')
              .then(res => res.url)
      }
    );

    yield put(actions.profileFetched({avatar: data}));
  } catch (error) {
    console.log(error)
  }
}

export default [
  takeLatest(actions.profileFetching, requestPic)
]