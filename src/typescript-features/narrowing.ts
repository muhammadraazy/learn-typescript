type Fish = { swim: boolean };

// in operator narrowing
const inOperator = (animal: Fish): void => {
    if("swim" in animal) {
        console.log(animal.swim)
    }
}

inOperator({swim: true})


// truthiness ( Boolean | !! to convert any type into boolean )
const usersOnline = (user: string | boolean): void => {
    if(user) {
         console.log(user)
    }
}

usersOnline(!!"")


// equality narrowing

interface Fisher {
    name: string | null | undefined;
}

const fisher = (fishes: Fisher, salary: string) => {
    if(fishes.name != null) {
         console.log(fishes.name.toUpperCase())
    }
}

fisher({ name: "mehmet" }, "2000")

//  discriminated union
//  when a union type has a common property with literal type

interface Cirlce {
    kind: "circle"
    radius: string
}

interface Rectangle {
    kind: "rectangle"
    weight: number
}

type Shapes = Cirlce | Rectangle

const shapes = (shape: Shapes) => {
    if(shape.kind == "circle") {
         console.log(shape.kind)
    }
}

shapes({ kind: "circle", radius: "radius" })