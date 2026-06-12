class Car{
    constructor(brand){
        this.brand = brand;
    }

    getInfo = () => {
        return 'This car brand is: ' + this.brand;
    }
}

class CarModel extends Car{
    constructor(brand, model){
        super(brand)
        this.model = model;
    
    }
    getDetails = () => {
        console.log(this.getInfo() + ' and its model number is: ' + this.model);
    }

    static getFullModelName = () =>{
        return 'this is static method'
    }
}

 const mazda = new CarModel('Mazda', 'RX-8');
 const Lancer = new CarModel('Lancer', 'EVO-9');
 const porche = new CarModel('Porche', '911');

mazda.getDetails()
Lancer.getDetails()
porche.getDetails()

console.log(CarModel.getFullModelName())