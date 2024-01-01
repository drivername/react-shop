import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface User{
    firstName:string,
    lastName:string,
    email:string
}

const initialState:User={
    firstName:'',
    lastName:'',
    email:''

}

const UserSLice=createSlice({
    name:'user',
    initialState,
    reducers:{
        saveUserData:(state,action)=>{  
            state.email=''
            state.firstName=""
            state.lastName=''
        }
    }
})

export const {saveUserData} = UserSLice.actions
export const selectCount = (state: RootState) => state.user
export default UserSLice.reducer