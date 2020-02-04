import {Action} from '@ngrx/store';
const ACTIVAR_LOADING='[IU Loading] Cargando...';
const DESACTIVAR_LOADING='[IU Loading] Fin de Carga';
const ID_PUBLICATION='[IU] Set IdPublication';
//falta limpiar ID_PUBLICATION

class ActivarLoadingAction implements Action{
    readonly type=ACTIVAR_LOADING;
}
class DesactivarLoadingAction implements Action{
    readonly type=DESACTIVAR_LOADING;
}
class SetIdPublication implements Action{
    readonly type=ID_PUBLICATION;
    constructor(public idPublication:string){}
}
export{
    ACTIVAR_LOADING,
    DESACTIVAR_LOADING,
    ID_PUBLICATION,
    ActivarLoadingAction,
    DesactivarLoadingAction,
    SetIdPublication
}
export type acciones =ActivarLoadingAction|DesactivarLoadingAction|SetIdPublication;