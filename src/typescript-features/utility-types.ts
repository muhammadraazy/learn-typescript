interface Hotels {
    name: string;
    price: string;
}

// PARTIAL<>
// partial mean makes all type to optional
const updateHotel = (hotels: Hotels, newUpdate: Partial<Hotels>) => {
    if(typeof newUpdate.price === "string") {
        hotels.price = newUpdate.price
    }

    console.log(hotels.name, hotels.price)
}

updateHotel({name: "amazing", price: "$2000" }, { price: "$3000" });


// REQUIRED
// required means set all types to required
type skillset = {
    skill?: string;
    experience?: string;
}

// all the optional types set to required
const mySkill: Required<skillset> = {
    skill: 'javascript, typescript',
    experience: '10 years'
}


// READONLY
// set all type to readonly
interface sports {
    name: string[];
    popular: boolean;
}

const mySport: Readonly<sports> = {
    name: ["football", 'basketball'],
    popular: true
}

// cannot assign to name because its a readonly
// mySport.name = ""

// RECORD<keys, types>

interface CatInfo {
    name: string;
    age: number;
}

type CatName = "Memet" | "Sule"

const MyCat: Record<CatName, CatInfo> = {
    Memet: { name: "Memet", age: 20 },
    Sule: { name: "Sule", age: 20 },
} 


// Pick<>
// pick a type with literal type / literal union type

interface Case {
    title: string;
    desc: string;
    completed: boolean
}

type PickCase = Pick<Case, "title" | "completed">;

const cases: PickCase = {
    title: "Murder",
    completed: true
}


// Omit<>
// pick a properties and remove it
interface Package {
    buy: boolean;
    price: string;
    sale: boolean;
}

type RemovedProp = Omit<Package, "price">

const pack: RemovedProp = {
    buy: true,
    sale: true
}

// non-nullable
// exclude null and undefined type from type
type NoNull = NonNullable<string | number | undefined | null>;
const herName: NoNull = 20


// practice REQUIRED
interface Programmer<Str, Bool> {
    skill: Str[];
    exp: Str;
    expectedSalary: Str;
    address?: Str;
    unEmployee?: Bool;
}

const getProgrammerDetail = <Str, Bool>(developer: Programmer<Str, Bool>): void => {
    if(developer.unEmployee) {
        console.log(developer.skill)
    }
}

const devDetail: Required<Programmer<string, boolean>> = {
     skill: ['html', "css", "js", "ts"], 
     exp: '2 years', expectedSalary: "$3000", 
     address: "jakarta", 
     unEmployee: true 
}

getProgrammerDetail(devDetail)


// practice RECORD
interface CarInfo<Str, Bool, Num> {
    name: Str;
    price: Num;
    rent: Bool;
}

type CarName = "Alphard" | "Toyota";

const myCar: Record<CarName, Partial<CarInfo<string, boolean, number>>> = {
    Alphard: { name: "alphard"},
    Toyota: { name: "toyota" }
}

type PickACar = Pick<CarInfo<string, boolean, number>, "name" | "price">

const car: PickACar = {
    name: "Alphard",
    price: 2000
} 

