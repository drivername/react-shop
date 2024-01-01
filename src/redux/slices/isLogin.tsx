import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface isLogin{
    login:boolean,
    jwtExpire:number
}

const initialState:isLogin={
  login:false,
  jwtExpire:0

}

const LoginSLice=createSlice({
    name:'isLogin',
    initialState,
    reducers:{
       changeLoginStatus:(state,payload)=>{
        state.login=payload.payload
       },
       setExpireJwtTokenTime:(state,payload)=>{
        console.log(payload,"CO TO PAYLOAD")
        state.jwtExpire=payload.payload
       }
    }
})

export const {changeLoginStatus,setExpireJwtTokenTime} = LoginSLice.actions
export const selectCount = (state: RootState) => state.user
export default LoginSLice.reducer