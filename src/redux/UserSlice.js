import { createSlice } from "@reduxjs/toolkit";

const initialState={
	email:null,
	password:null,
	isLoading:false,
	isAuth: false,
	users:{
		userEmail: "test@test.com",
		userPassword: "test",
	}
}

export const UserSlice = createSlice({
name:'user',
initialState,
reducers:{
	setEmail : (state, action)=> {
		const loverCaseEmail = action.payload.toLowerCase()
		state.email = loverCaseEmail
	},
	setPassword : (state, action)=> {
		state.password = action.payload
	},
	setIsLoading : (state, action) => {
		state.isLoading = action.payload
	},
	setLogin: (state) =>{
		if(state.email === state.users.userEmail && state.password === state.users.userPassword){
			state.isAuth = true	
			console.log(true)
		}else{
			state.isAuth = false
			console.log(false)

		}
	}
}
})

export const {setEmail,setPassword,setIsLoading,setLogin} = UserSlice.actions
export default UserSlice.reducer;