import * as fromAuth from './auth.actions';
import { User } from 'src/app/models/user.model';

export interface AuthState{
    user:User;
    token:string;
    isAuthenticate:boolean
}
const initState:AuthState={
    user:null,
    token:null,
    isAuthenticate:false
}

function AuthReducer (state=initState,action:fromAuth.acciones):AuthState{
    switch(action.type){
        case fromAuth.SET_USER:
            //console.log(action)
            return {
                token:action.token,
                user:{...action.user},
                isAuthenticate:true
            };
        case fromAuth.DEL_USER:
            return{
                token:null,
                user:null,
                isAuthenticate:false
            }
        case fromAuth.PUT_USER:
            return{
                ...state,
                user:{...action.user}
            }
        default: return state;
    }

}

export{
    AuthReducer
}