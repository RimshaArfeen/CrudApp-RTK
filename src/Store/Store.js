
import { configureStore } from '@reduxjs/toolkit'
import  userDetail  from './Slice/UserSlice'

export const store = configureStore({
  reducer: {
    app: userDetail
  },
})