const Driver = require('./Driver')

class Passenger {

    name;
    age;
    password;
    amount = 0;

    constructor(name, age, password){
        this.nome = name;
        this.idade = age;
        this.senha = password;

        this.constructor.passengers.push({name: name, age: age})
    }

    static passengers = [];
    static numOfPassengers(passengers) {
        console.log(`O total de motoristas cadastradas é ${passengers.length}`)

    }

    static ageAverage(passengers){
		const ageSum = passengers.reduce((total, next) => total + next.age, 0)
		const totalOfPassengers = passengers.length;
		const ageAverage = ageSum / totalOfPassengers;
		console.log ( `A média de idade dos motoristas é de ${ageAverage}`)
	}

    requestRide(driver, amount, password){
        if(password === this.password) {
            if(driver instanceof Driver) {

                this.amount -= amount;
                driver.amount += amount;
                driver.numberOfRides++;
            }else {
                console.log('Informe um motorista corretamente')
            }
        }else {
             console.log('A sua senha está correta') 
        }  
    }
}


const driver1 = new Driver('Maria', 33);
const driver2 = new Driver('Sandra', 44);
const driver3 = new Driver('Flávia', 29)

console.log(driver1)

const passenger1 = new Passenger('Amanda', 20, 1223);
const passenger2 = new Passenger('Fernanda', 20, 5555);
const passenger3 = new Passenger('Glória', 20, 4444);

// console.log(Driver.drivers)
// console.log(Passenger.passengers)

Driver.numberOfDriver(Driver.drivers)
Passenger.numberOfPassenger(Passenger.passengers)
// passenger1.requestRide(driver1, 12, 222 )
// console.log("Passenger 2", passenger2 )