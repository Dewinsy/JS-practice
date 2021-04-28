class Holiday{
    constructor(destination, days){
        this.destination = destination;
        this.days = days;
    }

    info(){
        console.log(`A trip to ${this.destination} will take ${this.days} days.`)
    }
}

const trip = new Holiday('The Bahamas', 3);
console.log(trip.info());

