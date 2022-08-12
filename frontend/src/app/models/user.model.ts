export class User{
    //atributos

    name: string
    species: string
    breed: string
    age: number
    weight: number
    gender: string
    chip: string
    foodbrand: string
    characteristic: string
    sterilized: string
    specialCondition: string
    whichSpecialCondition: string
    medicines: string
    whichMedicines: string
    vaccines: string
    whichVaccines: string
    userName: string
    email: string
    password: string
    confirmPassword: string
    isActive: boolean
    human: string
    cellphone: string
    address: string
    humanAut: string
    cellphoneAut: string
    role: string
    

    constructor(name="", species= "", breed="", age=0, weight=0, gender="", chip="", foodbrand="", characteristic="", sterilized="", specialCondition="", whichSpecialCondition="", medicines="", whichMedicines="", vaccines="", whichVaccines="", userName="", email="", isActive=true, password="", confirmPassword="", human="", cellphone="", address="", humanAut="", cellphoneAut="", role=""){
        //Inicializacion de los atributos cuando tengan un valor 
        this.name= name
        this.species= species
        this.breed= breed
        this.age= age
        this.weight= weight
        this.gender= gender
        this.chip= chip
        this.foodbrand= foodbrand
        this.characteristic= characteristic
        this.sterilized= sterilized
        this.specialCondition= specialCondition
        this.whichSpecialCondition= whichSpecialCondition
        this.medicines= medicines
        this.whichMedicines= whichMedicines
        this.vaccines= vaccines
        this.whichVaccines= whichVaccines
        this.userName= userName
        this.email= email
        this.password= password
        this.confirmPassword= confirmPassword
        this.isActive= isActive
        this.human= human
        this.cellphone= cellphone
        this.address= address
        this.humanAut= humanAut
        this.cellphoneAut= cellphoneAut
        this.role= role
        
    }
}