export class User{
    //atributos
    _id: string
    userName: string
    email: string
    isActive: boolean
    password: string
    confirmPassword: string

    constructor(_id ="", email="", userName= "", isActive=true, password="", confirmPassword=""){
        //Inicializacion de los atributos cuando tengan un valor 
        this._id = _id
        this.email= email
        this.userName= userName
        this.isActive= isActive
        this.password= password
        this.confirmPassword= confirmPassword
    }
}