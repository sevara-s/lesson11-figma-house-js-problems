// const hours = document.querySelector(".hour");
// const minutes = document.querySelector(".minutes");
// const secunds = document.querySelector(".secunds");

// function uiTime() {
//   let date = new Date();
//   hours.innerHTML =
//     date.getHours() >= 10 ? date.getHours() : "0" + date.getHours();
//   minutes.innerHTML =
//     date.getMinutes() >= 10 ? date.getMinutes() : "0 " + date.getMinutes();

//   secunds.innerHTML =
//     date.getSeconds() >= 10 ? date.getSeconds() : "0" + date.getSeconds();
// }
// setInterval(uiTime, 1000);

// let arr1 = [false,true,"salom"];
// let arr2 = [1,2,3,...arr1];
// console.log(arr2);
// let obj = {
//     name:"Olim",
//     age:21,
//     job:"Manajer",
// };
// let obj2 = {...obj,phone:"123",name:"Avaz"};
// console.log(obj2);

// function add(a,b,c,...rest){
//     console.log(rest);
//     return a + b +c + rest.reduce((acc,value) =>(acc+=value),0);
// }
// console.log(add(...[1,2,3,4,5,6,7,8,9]));

//  let[first,...rest] = [false,true,"ok",123];
//  console.log(first,rest)


// shallow copy and deep copy

// shallow copy

let name = "Name";
let num = 22;

let isActive = true;
let obj3 ={
    name:"Olim",
    age:21,
    job:"Menejer",
};

let person = {
    name: "Farruh",
    surname: "Komilov",
    age: 22,
    isMarried: true,
    location: {
        city: "Toshkent",
    },
};

let person2 = JSON.parse(JSON.stringify(person));
console.log(person2);

person2.name = "Jasur";
person2.location.city = "Samarqand";

console.log(person);
console.log(person2);