// type manipulation
// generic
// generic identity function

function genericFunc<Type>(arg: Type): Type {
    return arg;
}

genericFunc<string>("generic")


function loggingIdentity<Type>(args: Array<Type>): Array<Type> {
    return args
}

console.info(loggingIdentity<string>(["identity", "generic"]))

// generic classes

class MyGenericClass<Type> {
    bottle!: Type
    fruits!: Type
    food!: (name: Type, length: Type) => void

}

let genericClass = new MyGenericClass<string>();

genericClass.bottle = "aqua"
genericClass.fruits = "bananas"
genericClass.food = function(n = 'burger', l = '10') {
    console.log(n)
}

// KeyOf operator
type Point = { x: string, y: number };
// "x" | "y"
type Angle = keyof Point;

const myAngle = (angle: Angle) => {
    console.log(angle)
}

myAngle("y")

// typeof operator
let hello = 'hello world';
type Hey = typeof hello;

const getHey = (h: string):string => {
    return h;
}

let myHey: ReturnType<typeof getHey>;
let param: Parameters<typeof getHey>

// indexed access type
type Persons = { names: string, alive: boolean };
let biodata = [
    { nama: 'mohammed', age: 20 },
    { nama: 'izdihaar', age: 20 },
]

type People = Persons[keyof Persons]
type Peoples = Persons["names"]

type Biodata1 = typeof biodata[number]
type Biodata2 = typeof biodata[number]["nama"]
