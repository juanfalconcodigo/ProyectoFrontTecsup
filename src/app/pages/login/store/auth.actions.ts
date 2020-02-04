import { Action } from '@ngrx/store';
import { User } from 'src/app/models/user.model';


const SET_USER='[Auth] Set User';
const DEL_USER='[Auth] Del User';
const PUT_USER='[Auth] Put User';
/* const SET_TOKEN='[Auth] Set Token'; */

/* class SetUserAction implements Action{
    readonly type=SET_USER;
    constructor(public user:User){}
} */
class SetUserTokenAction implements Action{
    readonly type=SET_USER;
    constructor(public user:User,public token:string){}
}
class DelUserTokenAction implements Action{
    readonly type=DEL_USER;
}
class PutUserAction implements Action{
    readonly type=PUT_USER;
    constructor(public user:User){}
}

/* class SetTokenAction implements Action{
    readonly type=SET_TOKEN;
    constructor(public token:string){}
} */


export{
    SET_USER,
    SetUserTokenAction,
    DEL_USER,
    DelUserTokenAction,
    PUT_USER,
    PutUserAction
   /*  SetUserAction, */
    /* SET_TOKEN,
    SetTokenAction */
}
/* export type acciones=SetUserAction  | SetTokenAction ; */
export type acciones=SetUserTokenAction | DelUserTokenAction | PutUserAction;