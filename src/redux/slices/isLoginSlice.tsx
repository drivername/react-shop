import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../store"

interface isLoginState {
    value: boolean
    refreshValue:number,
    id:number,
    firstName:string,
    lastName:string,
    email:string
  }
  
  // Define the initial state using that type
  const initialState: isLoginState = {
    value: false,
    refreshValue:0,
    id:0,
    firstName:'',
    lastName:'',
    email:''

  }
  
  export const isLoginSlice = createSlice({
    name: 'isLogin',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setUserLoginStatus(state,action){
            state.value=action.payload
        },
        refreshNav(state,action){
          state.refreshValue++
        },
        saveDataAboutUser(state,action){
          
          state.firstName=action.payload.firstName
          state.lastName=action.payload.lastName
          state.email=action.payload.email
          state.id=action.payload.id
        }
    
    },
  })
  
  export const { setUserLoginStatus, refreshNav, saveDataAboutUser } = isLoginSlice.actions
  
  // Other code such as selectors can use the imported `RootState` type
  export const selectCount = (state: RootState) => state.isLogin.value
  
  export default isLoginSlice.reducer