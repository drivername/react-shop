import { configureStore } from '@reduxjs/toolkit'
import isLoginSlice from './slices/isLogin.slice'
import userDataSlice from './slices/userData.slice'
// ...

export const store = configureStore({
  reducer: {
   isLogin:isLoginSlice,
   userData:userDataSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch