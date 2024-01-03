import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'


// Define a type for the slice state
interface isLoginState {
  value: boolean
}

// Define the initial state using that type
const initialState: isLoginState = {
  value: false,
}

export const isLoginSlice = createSlice({
  name: 'isLogin',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setLoginStatus(state,action){
        console.log(action.payload,'ACTION')
        state.value=action.payload.boolean
    }
  },
})

export const { setLoginStatus } = isLoginSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.isLogin.value

export default isLoginSlice.reducer