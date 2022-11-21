

let funnc = (a, b) => {

}


funnc(1, 3)
//----------

let a = 2
let a1 = 2

let array = {
    age: 15,
    log: () => {
        console.log("privet")
    }
}
array.log()


let obj = {
    number: "stroka"
};

let obj2 = {
    number: "stroka"
};

let obj3 = obj


console.log(obj === obj2)

console.log(obj3 === obj)

///-------------


let myArray = [1, 2, 3]

myArray.forEach((item) => {
    console.log(item)
})





/////////--------------

let newFunnc = (a) => {


}

let myFunnc = (funnc) => {
    funnc()
}
myFunnc(newFunnc)

///------
let myFunc = (a, b, c, d) => {
    let number = (a + b + c + d) / 4
    console.log(number)

}
myFunc(1, 3, 5, 9)
////------------

let canistra = ()=>{
    console.log(15*15)
}

let bak =(callback)=>{

    
    callback()


}

bak(canistra)



///////----

let showNumber = (a)=>{
console.log(a)
}
showNumber(5)
///-------------------

let callbackFunc = (showNumber,c) =>{

    
showNumber(c)
}
callbackFunc(showNumber,5);
////---------------------
let value = 0;

let arrayFunction = (a)=>{
value += a;
console.log(value)
}
let numberArray = [1,2,3,4]
numberArray.forEach(arrayFunction)
//----------------------

let textFunction = (p)=>{
    p.textContent = "hello";
}

let jsTextArray = document.querySelectorAll(".js_text");

jsTextArray.forEach(textFunction)












