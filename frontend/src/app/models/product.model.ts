export class Product{
    //atributo
    _id: string;
    code: string;
    name: string;
    price: string;
    description: string;
    stock: string;
    image: string;

    //construtor
    constructor(
        _id = '',
        code = '',
        name = '',
        price = '',
        description = '',
        stock = '',
        image = '',
        ) {
        //inializar los atributos cuando tengan un valor
        this._id = _id;
        this.code = code;
        this.name = name;
        this.price = price;
        this.description = description;
        this.stock = stock;
        this.image = image;
    }
}