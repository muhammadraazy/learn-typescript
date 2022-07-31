interface Hotels<Str, Bool, Num> {
    names: Str[];
    rooms: Num;
    price: Str;
}

interface Elements<Str, Num> {
    tag: Str;
    text: Str;
    className: Str;
    styles: [Str, Str]
    id?: Str | Num;
}

const makeNewElement = <Str, Num>(elements: Elements<Str, Num>):void => {
    const { tag, text, className, styles: [color, padding] } = elements;
    const hotels = document.querySelector(".hotels") as HTMLDivElement;

    if(typeof text === "string" && typeof className === "string") {
        hotels.className = className;
        hotels.textContent = text;
    }

    console.log(hotels.classList)
}

makeNewElement<string, number>({ tag: 'div', text: "Hello Typescript", className: "hotel-detail", styles: ['black', "20px"]})
