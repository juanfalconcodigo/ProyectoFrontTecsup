import * as fromIu from './iu.actions';
export interface State{
    isLoading:boolean;
    idPublication:string;
}
const initState:State={
    isLoading:false,
    idPublication:null
}
function UiReducer(state=initState,action:fromIu.acciones):State{
    switch(action.type){
        case fromIu.ACTIVAR_LOADING:

           return {
               ...state,
              isLoading:true
           } ;

        case fromIu.DESACTIVAR_LOADING:

            return {
                ...state,
             isLoading:false
            } ;
        case fromIu.ID_PUBLICATION:
            return {
                ...state,
                idPublication:action.idPublication
            }
            
        default:
            return state;

    }

}

export{
    UiReducer
}

