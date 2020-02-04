import * as fromIu from '../pages/home/store/iu.reducer';
import * as fromAuth from '../pages/login/store/auth.reducer';
import { ActionReducerMap } from '@ngrx/store';


export interface AppState{
    ui:fromIu.State;
    auth:fromAuth.AuthState;
}
//COMO UN COMBINE REDUCER ActionReducerMap<AppState>
export const AppReducer:ActionReducerMap<AppState>={
    ui:fromIu.UiReducer,
    auth:fromAuth.AuthReducer
}