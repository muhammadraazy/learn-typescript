// type aliases
type MyTypes = {
    name: string,
    age: number
}

const user: string | string[] = 'mohammed'

const getDetails = (person: MyTypes): void => {
    const { name, age } = person;
    console.log(name)
}

getDetails({name: 'mohammed', age: 20})