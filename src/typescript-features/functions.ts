// function type expression
function myFunc(fn: (name: string) => void)  {
    fn("hellow")
}

myFunc(name => console.log(name))

// generic function
const getCar = <Type>(name: Type, price: Type): void => {
    console.log(name)
}

getCar("Alphard", "$2000")

// constraint 
function hisFunc<Type extends { like?: boolean, hate?: boolean }>(baloon: Type, smuggle: Type):void {
    if(baloon.hate) {
        console.log("why you hated the baloon??")
    }
}

hisFunc({hate: true}, {})


interface Youtube {
    video: boolean;
    totalLike: number;
    totalSubs: number;
    // function type
    videoDetails: (title: string, length: number) => void
}

const getYoutubeVideo = (videoDet: Youtube):void => {
    console.log(videoDet.videoDetails("Make Me Cum", 2))
}

getYoutubeVideo({ video: true, totalLike: 1000, totalSubs: 200000, videoDetails: (title, length) => {
    return { title, length }
} })


interface TypeExpress {
    nama: string;
    asal: string;
    // function types
    detail: (arg: string) => void;
    // call signatures
    (more: string): void;
}

// constructs signatures with new keyword
interface MyConstruct {
    [ndex: string]: string | number;
    new (greet: string): void;
    name: string
}

const getConstruct = (construct: MyConstruct) => {
    new construct("hello there")
}    

// getConstruct()

// specify type arg

const combine = <Type>(skill1: Type[], skill2: Type[]): Type[] => {
    const combined = skill1.concat(skill2);

    return combined;
}

combine<string|number>(["html", 'css', 'js'], ['typescript', 'reactjs', 'reduxjs'])


const combine2 = <Type extends any[]>(skill: Type): void => {
    console.log(parseInt(skill[1]))
}

combine2([2, '2', '3', 3])


// overload function signatures
// these first two func called function overload signatures
// overload and implementation signatures have to be compatible type (same type)
function makeDate(date: number): void;
function makeDate(m: number, d: number, y: number): void
function makeDate(mOrTimestamp: number, d?: number, y?: number): void {
    if(mOrTimestamp !== undefined) {
         console.log(mOrTimestamp)
    }
}

makeDate(10)
makeDate(1, 2, 3)
makeDate(20, 10, 30);


// additional types in typescript

const myUnknown = (s: string, u: unknown): unknown => {
    return (s.charAt(1));
}

myUnknown('okay', 'unknown')

const myUnknown2 = (s: string): any => {
    console.log(s)

    return s
}

myUnknown2('okay')

// function type exp
type FuncType = () => void;

const myFuncType: FuncType = () => {
    return true
}

interface HerSign {
    [ndex: string]: string | boolean;
    bigAss: boolean;
    tightPussy: boolean;
    busty: boolean;
    cumInside: string;
}


const destructed = ({ bigAss, tightPussy, busty, cumInside }: Partial<HerSign>, ...r: [boolean[], string[]]): string => {
    const cumming = cumInside;
    console.log(cumming, r);

    return cumming!;
}

destructed({ cumInside: "cum in me please!!" }, [true, false], ['no', 'yes']);
