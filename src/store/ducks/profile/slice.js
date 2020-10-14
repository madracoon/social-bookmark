import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  avatar: null,
  links: [],
  tags: [],
  isFetching: false
}

const slice = createSlice({
  name: 'profile',
  initialState: initialState,
  reducers: {
    profileFetching: (state) => {
      state.isFetching = true
    },
    profileFetched: (state, action) => {
      state.isFetching = false,
      state.avatar = action.payload.avatar,
      state.links = action.payload.links || [],
      state.tags = action.payload.tags || []
    },
    profileChangingAvatar: () => {},
    profileChangedAvatar: (state, action) => {
      state.avatar = action.payload.avatar
    }
  }
})

export const { reducer, actions } = slice;