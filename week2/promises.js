

function random(resolve){
    setTimeout(resolve,3000);
}

function callback(){
    console.log("finlay executes");
}

// function resolve() {
//     console.log("resolves executes");
// }

let  p = new Promise(random).then(callback);
console.log("hi");

//  1 - function random is passed inside promise(always a fucnion is passed inside promise)
// 2 - inside random first argument is resolve
// 3 - when resolve is called after 3 sec then callback is called
// 4- we can say whenver first argument of fucntion inside promise is called then(callback)
// wala fucntion is called