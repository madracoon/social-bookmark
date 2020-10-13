import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  github: false,
  instagram: false,
  isChecking: false
}

const slice = createSlice({
  name: 'checkProfiles',
  initialState: initialState,
  reducers: {
    profilesChecking: (state) => {
      state.isChecking = true
    },
    profilesChecked: (state, action) => {
      state.isChecking = false,
      state.github = action.payload.github,
      state.instagram = action.payload.instagram
    }
  }
})

export const { reducer, actions } = slice;