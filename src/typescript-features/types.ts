// type aliases
type MyTypes = {
    name: string,
    age: number
}

// function type expression
interface MyThing {
    thing:(a: string) => void
}

let myThng: MyThing = {
    thing: () => {
        console.log('thing')
    }
} 

myThng.thing("thing");

// tuple types
let users: [string, number, boolean] = ["mohammed", 20, true]

const user: string | string[] = 'mohammed'

const getDetails = (person: MyTypes): void => {
    const { name, age } = person;
    console.log(name)
}

getDetails({name: 'mohammed', age: 20})

// literalTypes
// literal types
const person = (ages: 20 | 22 | 23, direction: 'left' | 'right'): void  => {
    console.log(`his age`+ ages + "and he went to"+  direction)
}

person(20, "right")

// literal type inference
const req = { url: "https://google.com", method: "GET"} as const;

console.log(req.method)

