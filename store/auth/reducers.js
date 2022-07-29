import { actionTypes } from "./constants"

const initialState = {
    loading : false,
    user : {},
    token : {}
}

const authReducer = (state=initialState,action)=>{
    switch(action.type) {
        case actionTypes.SET_AUTH_LOADING : return {...state,loading  :action.payload}
        case actionTypes.SET_AUTH_DETAILS : return {...state, ...action.payload}
        default : return state
    }
}

export default authReducer;