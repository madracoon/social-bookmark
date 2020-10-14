import { put, takeLatest, call } from 'redux-saga/effects'
import { actions } from './slice'

const delay = (ms) => new Promise(res => setTimeout(res, ms))

// Dummy data
const profiles = {
  1: {
    avatar: "https://lh3.googleusercontent.com/proxy/dCAV-EG_UL-FASJoTs6uB3IDoPUbbldihePQuDL3t7KJunltMIhSBtEiPBOiT-a-sROYZ4DuLv0MYaGpDCP9kDJX8yU6-eZNTtNa7YkMFOTeg7nf2mME0jvumOYosFvIi3PF4_5CzefZuO0wcQLCjTu0glnZ6Ogb3vuQx_x23byfJ4TUE0JqPeTcOBu3qNqFFb5eYAjC8Y_W259zm2S9OzDa9BSApNJBpPqc3sApAI6ROi3jjWCYTq_6Kxv3R4w7bA1PximdaZ5Ibfxqp4g2PzWz71M",
    links: [
      {network: 'twitter', username:'artorias'},
      {network: 'instagram', username: 'artorias'},
      {network: 'github', username: 'artorias'}],
    tags: ['darksouls', 'badass']
  },
  2: {
    avatar: "https://lh3.googleusercontent.com/proxy/2Jx2ylZV5wdYuog-hrzTDmnDgpPN2JQLdu0W8lhacEjegkUNtsvvlgubhJ0fedD7kfhsTqBvJYm7dLl65Xy3ucbjNlBDPy-tMNnI4_NMiQFnn6weJnKoKLTAqzi3eL-q23FbhD40-0czCb1j9Hq5vaiN5gf2rJPtXJaNvLpVqT5ZMAE29DFqF-r6ODVEjga2EpRc7AkFT3dnbGcYL0zgrYSst6mNuq_vaMIjVaTgognsadmiyWYNmnoxx0p3fRXYyzlfUDGKWPJW4DKh-A",
    links: [
      {network: 'instagram', username: 'solaire'},
      {network: 'github', username: 'astora_developer'}
    ]
  }
}

function* requestPic() {
  try {
    const data = yield call(() => (fetch('https://picsum.photos/300/600').then(res => res.url)));
    yield put(actions.profileChangedAvatar({avatar: data}));
  } catch (error) {
    console.log(error)
  }
}

function* fetchProfile({ payload }) {
  try {
    const data = yield call(() => (profiles[payload.id]));
    yield put(actions.profileFetched(data))
  } catch (error) {
    console.log(error);
    yield put(actions.profileFetched({avatar: '', links: [], tags: []}))
  }
}

export default [
  takeLatest(actions.profileFetching, fetchProfile),
  takeLatest(actions.profileChangingAvatar, requestPic)
]