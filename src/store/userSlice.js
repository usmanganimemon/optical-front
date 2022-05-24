import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'sidebar',
  initialState: {
    token: '',
  },
  reducers: {
    setToken: (state, actions) => {
      state.token = actions.payload
    },
  },
})
export const { setToken } = userSlice.actions
export default userSlice.reducer
