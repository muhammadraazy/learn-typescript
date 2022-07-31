interface HotelRoom {
    occupied: boolean;
    vacant: boolean;
    price: number;
} 

// combine object type with extending
// interface HotelRoomWithFacility extends HotelRoom {
//     facility: string[];
// }

interface RoomFacility {
    facility: string[];
}

// combine object with intersection
type HotelRoomWithFacility = HotelRoom & RoomFacility;

const getHotelRoom = (hotelRoom: HotelRoomWithFacility):void => {
    if(hotelRoom.occupied) {
        console.log("occupied")
        console.log(`the facility is ${hotelRoom.facility}`)
    } else {
        console.log('vacant')
    }
}

getHotelRoom({ occupied: false, vacant: true, price: 2000, facility: ["soap", 'tv', 'towel', 'twin-bed']})

// generic object type
interface Box {
    contents: unknown;
    height: string;
    width?: string;
    readonly size: number;
}

let myBox: Box = {
    contents: 'My Box',
    height: '200px',
    width: '200px',
    size: 300
}

// 2 ways check the generic object type is a string
if(myBox.contents === "string") {
    console.log(myBox.contents.toLocaleUpperCase())
}

console.log((myBox.contents as string).toLocaleUpperCase())

// generic object type
// interface NewBox<Type> {
//     contents: Type;
// }

// let box: NewBox<string|number> = {
//     contents: 'new box'
// }

// generic object type
interface NewBox<Str, Bool, Num> {
    contents: Str;
}

let box: NewBox<string|number, boolean, number> = {
    contents: 'new box'
}

// generic function
function setContents<Type, Bool, Num>(box: NewBox<Type, Bool, Num>, newContents: Type):void {
     box.contents = newContents;

     console.log(box.contents)
}

setContents<string, boolean, number>({ contents: 'boxes' }, 'new contents')

// generic array types;


// tuple types
let toples: [string, number];
type tuples = [string, number];

let [str, num] = toples;
console.log(str = 'my str')