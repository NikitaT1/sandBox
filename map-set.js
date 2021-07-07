const obj = {
  name: 'Nikita',
  age: 30,
  location: 'Minsk' 
}

const entries = [
  ['name', 'Nikita'],
  ['age', 30],
  ['location', 'Minsk']
]

const map = new Map(entries)
map
.set(42, 'newField')
.set(obj, 'Value of object')
//console.log(map)
//console.log(map.get(obj))
map.delete('location')
//console.log(map.has('location'))

// for (let entry of map.entries()){
//   console.log(entry)
// }

// for (let [key, value] of map.entries()){
//   console.log(key, value)
// }

// for (let val of map.values()){
//   console.log(val)
// }

// for (let key of map.keys()){
//   console.log(key)
// }

// map.forEach((val, key, m) => {
//   console.log(val, key)
// })

const array = Array.from(map)
//console.log(array)

const users = [
  {name: 'Elena'},
  {name: 'Alex'},
  {name: 'Irina'},
]

const visits = new Map()

visits
.set(users[0], new Date())
.set(users[1], new Date(new Date().getTime() + 1000 * 60))
.set(users[2], new Date(new Date().getTime() + 5000 * 60))

function lastVisit(user){
  return visits.get(user)
}

//console.log(lastVisit(users[1]))

//console.log(visits)