import { configureStore } from '@reduxjs/toolkit'
import UserSlice from './slices/UserSlice'
import isLogin from './slices/isLogin'

export const  store = configureStore({
    reducer: {
      user:UserSlice,
      isLogin:isLogin
    },
  })


export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch