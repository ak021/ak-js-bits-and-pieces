console.log("this is main js file");

const colors = {
    red: "#edfff",
    black: "#000",
    getColor(){
        // first valid line above the arrow function
        console.log({before:this});
        const printThis = () => {
            console.log({after:this});
        }
        printThis();
    },
    getHex: () => {
        // first valid line will be outside the colors which is window object
        console.log({hex: this})
    }
}

colors.getColor();


const cars = {
    color:"green",
    brand: "bently",
    printCar(){
        console.log(this);
    }
}

const newCar = {
    color:"#fff"
}

newCar.printnewCar = cars.printCar;
newCar.printnewCar();
