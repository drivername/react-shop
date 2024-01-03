import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'


// Define a type for the slice state
interface userDataType {
  data:{
    createdAt:string,
    email:string,
    firstName:string,
    id:number,
    lastName:string,
    updatedAt:string
  }
}

// Define the initial state using that type
const initialState: userDataType = {
  data:{
    createdAt:'',
    email:'',
    firstName:'',
    id:0,
    lastName:'',
    updatedAt:''
  },
}

export const userDataSlice = createSlice({
  name: 'userData',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setUserData(state,action){
        state.data=action.payload
        
    }
  },
})

export const { setUserData } = userDataSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.isLogin.value

export default userDataSlice.reducer