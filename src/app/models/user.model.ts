class User{
    role:string;
    is_active:boolean;
    _id:string;
    first_name:string;
    last_name:string;
    email:string;
    photo_url:string;
    photo_public_id:string;
    date:Date;
   
    constructor(obj:ObjUser){
        this.role=obj && obj.role || null;
        this.is_active=obj && obj.is_active || null;
        this._id=obj && obj._id || null;
        this.first_name=obj && obj.first_name || null;
        this.last_name=obj && obj.last_name || null;
        this.email=obj && obj.email || null;
        this.photo_url=obj && obj.photo_url || null;
        this.photo_public_id=obj && obj.photo_public_id || null;
        this.date=obj && obj.date || null;
    }
}
interface ObjUser{
    role:string;
    is_active:boolean;
    _id:string;
    first_name:string;
    last_name:string;
    email:string;
    photo_url:string;
    photo_public_id:string;
    date:Date;
}

export{
    User,
    ObjUser
}
