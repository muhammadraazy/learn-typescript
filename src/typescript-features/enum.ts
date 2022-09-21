// enum without initializer is constant enum
// numeric enum
// have an auto-incrementing behavior
enum Statuses {
    Married = 1,
    Single
}

console.log(Statuses[0])

const myStatus = (status: Statuses): void => {
    if(status === 1) {
        console.log("you are single")
    }
}

myStatus(Statuses.Married)


// string enum
// didn't an auto-incrementing behavior
enum Direction {
    Up ="UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}

type Directions = "UP" | "DOWN" | "LEFT" | "RIGHT"

const getDirections = (directions: Direction): void => {
    if(directions == "RIGHT") {
        console.log(`im going to the ${directions} way`)
    }
}

getDirections(Direction.Right)


// Heterogeneous Enum
// not recommended
enum Msg {
    No = 0,
    Yes = "YES"
}

console.log(Msg.No, Msg.Yes)

enum FileAccess {
    Read = 1 << 2,
    Write = 3 >> 3
}

console.log(FileAccess.Read)

// union enum and enum members
enum Shape {
    Circle,
    Rectangle
}

// enum become a type
interface Circ {
    kind: Shape.Circle;
    radius: number
}


enum Player {
    Name = "MOHAMMED",
    Job = "WEB DEVELOPER"
}

const objEnum = (player: Player) => {
    console.log(player)
}

objEnum(Player.Name)

const enumIsObject = (player: { Name: string }) => {
    console.log(player.Name)
}

enumIsObject(Player)


// enum at compile time
enum LogLevel {
    Error,
    Warn,
    Info,
    Debug
}

// equivalent to typ LogLevelType = "Error" | "Warn" | "Info" | "Debug"
type LogLevelType = keyof typeof LogLevel;

const getDebugInfo = (key: LogLevelType): void => {
    let err = LogLevel[key];

    if(err > 2) {
        console.log(`err is e ${LogLevel[3]}`)
    }
}

getDebugInfo("Debug")


enum TagNames {
    Div = "div",
    H2 = "h2",
    H3 = "h3"
}

const makeNewEl = (tag: TagNames):void => {
    const div = document.createElement(tag)
    div.textContent = 'heelo'

    console.log(div)
}

makeNewEl(TagNames.Div)


