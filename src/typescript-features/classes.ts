// class field have to be define in constructor or use non null assertion ! sign
// visibility ( public, protected, private );

class MyAnimal {
    [s: string]: string | ((str: boolean) => void) | number ;
    protected name: string;
    readonly age: number;

    constructor(name: string, age: number) {
         this.name = name;
         this.age = age
    }

    changeName(newName): void{
         this.name = newName;
         // cannot assign outside a constructor if the field is readonly
         // this.age = 20

         console.log(this.name)
    }

    get animalName(): string {
         console.log(this.name)

         return this.name;
    }
}


class Kitten extends MyAnimal {
    constructor(name: string, age: number = 2, length: number) {
         super(name, age);
         this.name = name;
    }

    changeName(kittenName): void{
        console.log(this.name = kittenName) 
    }
}

let kitten: MyAnimal =  new Kitten("Baby Kitten", 4, 4)
kitten.changeName('new baby')
kitten.changeName('another baby')

// class expression
const ExprClass = class {
    courses!: string[]
}

// implements interface to classes
interface Car {
    name: string;
    price: number;
}
class MyCar implements Car {
    name!: 'Toyota';
    price!: 2000;

    static getCar(): void {
         console.log(this.name)
    }
}

let cars = new MyCar()
MyCar.getCar()

// generic classes
class NewRoom<Type> {
    private readonly name: Type;
    price: Type;

    constructor(name: Type, price: Type) {
         this.name = name;
         this.price = price
    }

    static getPrice() {
         console.log(this.name)
    }
}

NewRoom.getPrice("sahid jaya", 1000)

// implement interface
interface Pong {
    ping: (str: string) => void;
}

interface Ping {
    pong: (newStr: string) => void
}

class PingPong implements Pong, Ping {
    ping(str: string): void {

    }

    pong(newStr: string): void {

    };
}

// abstract classes
// abstract class just for base class, cannot be instantiate
abstract class MyAbs {
    abstract getMyAbs(): string;
}

class Abs extends MyAbs {
    getMyAbs(): string {
        console.log("okay")

        return "alright"
    }
}