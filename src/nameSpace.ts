namespace MySpace {
    export const simpleFunc = (msg: string) => {
        console.log(msg)
    }
}

interface Maccaroni {
    price: string;
    spicyLevel: string;
    from: string;
    available: boolean
}

const getAllElements = (tag: string) => {
    const newHead = document.createElement(`${tag}`)
    const divs = document.getElementById("divs")
    newHead.textContent = "new one"

    console.log(divs)
}

getAllElements("h2")