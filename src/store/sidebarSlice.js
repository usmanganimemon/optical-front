import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'sidebar',
  initialState: {
    show: true,
  },
  reducers: {
    setSidebarShow: (state, actions) => {
      state.show = actions.payload
    },
  },
})
export const { setSidebarShow } = counterSlice.actions
export default counterSlice.reducer
