"use strict"
// let a = "yoyo";
// let b = "yoyo";
// console.log(a==b);

// splice
// let arr = [1,2,3,4,5];
// arr.splice(2,2,6,7,8,9)
// console.log(arr)

// let arr = ["apple","orange","banana"]
// arr.splice(1,1,"pear","plum")
// console.log(arr)
// let arr1 = structuredClone(arr) //deep copying
// arr1[0] = "Guava"


// console.log(arr1)

// let i = 1;

// while(i<=10){
//     console.log(i);
//     i += 1;
// };

// let i = 0;

// do{
//     console.log("Hello world");
//     i += 1;
// }while (i<10){};

// let a = Number(prompt("Kutte"));
// console.log(a);
// console.log(typeof a);

// let a = parseInt(prompt("Kutte"));
// console.log(a);
// console.log(typeof a);

// let a = parseFloat(prompt("Kutte"));
// console.log(a);
// console.log(typeof a);



// alert("Jatt aage toronto aale");


//template literals

// let Name = prompt("your name")
// alert(`ghumi ghumi chaloge kya ${Name}`)


// let a = prompt("your expense");
// let total = 0;
// while(a != "done"){
//     total += parseFloat(a);
//     a = prompt("Enter your expense");
// };
// alert(`bhaut jada kharcha nhi krra tu${total}`)

const POLICAD_QUESTION_DATA = {
  "students": [
    { "id": 1, "name": "Ravi", "marks": 72 },
    { "id": 2, "name": "Amit", "marks": 35 },
    { "id": 3, "name": "Sneha", "marks": 88 },
    { "id": 4, "name": "Priya", "marks": 40 },
    { "id": 5, "name": "Karan", "marks": 29 }
  ]
};

const data = POLICAD_QUESTION_DATA;


// Write your code below
let i = 0;
let statuses = "Fail";
let students = data.students;
console.log(students);
while(i < students.length){
  if(students[i]["marks"] >= 40){
    statuses = "Pass"
  };
  console.log(`${students[i].name} : ${statuses}`);
  i += 1;
};