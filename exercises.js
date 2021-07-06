//Написать функцию, которая принимает аргумент и возвращает тип.
arg = [1,2,3]

function argToTypeTransform(arg){
    return typeof arg
}
console.log(`Function takes arg and returns type: ${argToTypeTransform(arg)}`)


//Написать функцию, чтобы получить список свойств объекта.
const obj = {
    name: 'a',
    number: 1,
    method () {
        return this.name
    }
}

function listOfProps (obj){
    let properties = []
    for (let key in obj)
    properties.push({key: obj[key]})
    return properties
}

console.log(listOfProps(obj))

//Написать функцию, чтобы вращать строку «string», периодически удаляя одну букву из конца строки и прикрепляя ее к началу.
