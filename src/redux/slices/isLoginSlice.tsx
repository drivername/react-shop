import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../store"

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
        setUserLoginStatus(state,action){
            console.log(action.payload,'what is set')
            state.value=action.payload
        }
    
    },
  })
  
  export const { setUserLoginStatus } = isLoginSlice.actions
  
  // Other code such as selectors can use the imported `RootState` type
  export const selectCount = (state: RootState) => state.isLogin.value
  
  export default isLoginSlice.reducer