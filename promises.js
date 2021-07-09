// const promise = new Promise((resolve, reject) => {

//     setTimeout(()=> {
//         resolve(1)
//     }, 2000)

// })

// promise.then(result=> console.log(`result ${result}`))

new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 1000);
})
  .then(function (result) {
    console.log(result); // 1

    return new Promise((resolve, reject) => {
      if(result === 1 )
      setTimeout(() => resolve(result * 2), 1000);
    });
    
  })
  .then(function (result) {
    console.log(result); // 2
    
    return new Promise((resolve, reject) => {
      if(result >= 2){
        const obj = {
          name: 'a',
          number: 30
        }
        setTimeout(() => resolve([result * 2, obj]), 1000);
      }
      
      else reject('some error')
    });
  })
  .finally(resolve => {
    console.log(`${resolve} from callback finally`)
  })
  .then(function ([a, b]) {
  
    const entries = [
      ['name', 'B'],
      ['number', 33]
    ]
    const map = new Map(entries)
    .set(b, a)
    
    return map
  })
  .catch( function (result) {
    setTimeout(() => console.log(`${result} from catch block`), 1000);
  })
  .then( result => {
    console.log(result); 
    // return new Promise( (resolve, reject) => {

    // })
  })



  // const n = new Promise((resolve, reject)=>{
  //     setTimeout(()=> resolve(2), 2000)
  // })
  // .then(value => {
  //   setTimeout(()=> value * 2, 2000)
    
  // })
  // .then(value => {
  //   if (value < 10) {
      
  //   }
  //   console.log(value +1)
  // })
 
  
  // var P = new Promise(function (resolve, reject) {
  //   var a = 5;
  //   if (a) {
  //     setTimeout(function(){
  //       resolve(a);
  //     }, 3000);
  //   } else {
  //     reject(a);
  //   }
  // });


