/*const student = {
    fullName: "Monkey D Luffy",
    age: 19,
    cgpa: 7.5,
    ispass:true,
} ;
student["age"] += 1;
console.log(student["age"]);

const product= {
    pName: "ball pen",
    pRating: 4,
    Price: 270,
    offer: 5,
};
console.log(product);

const profile ={
    username: "Roronoa Zoro",
    isfollow:false,
    Posts: 195,
    followers: 1.1,
    following: 10,
    treadName: "RoronoaZoro"
};
console.log(typeof profile["isfollow"]);
//This is a single line comment 
/* this is a double or mutiple
line comment*/

// Arithmetic operators

/*let a= 5;
let b = 2;
console.log("a+b=", a+b);
console.log("a-b=", a-b);
console.log("a*b=", a*b);
console.log("a/b=", a/b);
console.log("a%b=", a%b);
console.log("a**b=", a**b);

//unary operator 
let x = 5;
let y = 2;
console.log("a++=", a++);
console.log("a=", a);

console.log("--a=", --a);
console.log("a=", a);

//Assignment Operator 
let p = 5;
let q = 2;

p+=4;
console.log("p=", p);
p**=4;
console.log("p=", p);

//comparison operator

console.log(a!=b);

//conditonal statement 
//if statement 
let age= 16;
let mode= "light";
let color;

if(mode==="dark"){
    color="black";
}

if(mode==="light"){
    color= "white";
}
console.log(color);

if(age>=18){
    console.log("you can vote");
}
if(age < 18){
    console.log("you cannot vote");
}

//if-else statement
let modee="dark";
let colour;
if(modee==="dark"){
    colour="black";
}
else{
    colour= "white";
}
console.log(colour);


// else-if statement
if(age<18){
    console.log("junior");
}else if(age>60){
    console.log("senior");
}else{
    console.log("middle")
}
let result= age>=18? "adult": "not adult";
console.log(result);


// check if number is multiple of 5 or not.

let numb= prompt("enter a number:");
if(numb % 5===0){
    console.log(numb,"is a multiple of 5");
}else{
    console.log(numb,"is not a multiple of 5");
}

//practice question 2 

let score = 35;
let grade;
if(score>=80 && score <=100){
    grade = "A";
}   else if(score>=70 && score <=79){
    grade = "B";
}   else if(score>=60 && score <=69){
    grade = "C";
}   else if(score>=50 && score <=59){
    grade = "D";
}   else{
    grade = "F";
}

console.log(grade);

//Lecture 3 

for(let i=1;i<=5;i++){
    console.log("Vinsmoke Sanji");
}
console.log("Loop has ended")

//calculate sum of 1 to 5

let sum=0;
for(let i =1;i<=5;i++){
    sum= sum+ i;
    console.log(sum);
}
console.log("loop has ended")

//while Loop

let i=1;
while(i<=5){
    console.log("Nico Robin");
    i++;
}

//do-while Loop

let j=20;
do{
    console.log("Nico Robin");
    j++;
}while(j<=10);

//for-of loop 
let str= "Nami";
let size= 0;
for(let n of str){
    console.log("n=",n);
    size++;
}
console.log("size of string :", size);

//for-in loop

let student1={
    name: "Tony Tony Chopper",
    age: 16,
    cgpa:7.5,
    ispass: true,
};
for (let key in student1){
    console.log(key, "values=", student1[key]);
}

//practice 1 print all the even numbers from 0 to 100

for(let no=0;no<=100;no++){
    if(no%2==0){
        console.log("even numbers from 0 to 100 are:",no);
    }
}

//practice question 2

/*let gamenum= 25;
let usernum = prompt("guess the game number:");
while(usernum!= gamenum){
    usernum= prompt("you guessed the wrong number!try again:");
}
console.log("congratulations! You have guessed the right number");
*/

//Template Literals example
let obj= {
    item : "pen",
    price : 10
};
let output= `the cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);

// Practice question

/*let fullname = prompt("Enter the fullname without space");
let username = "@" + fullname + fullname.length;
console.log(username);

//SubString example
let anyString = "Mozilla";
console.log(anyString.substring(6, 0));
*/
//toString() method example
let num = 42;
console.log(num.toString());

let sum=0;
for(let i=1; i<=5;i++){
    sum += i;
    console.log(sum);
}
console.log("loop has ended");

let str="Nami";
let size= 0;
for (let i of str){
    console.log("i=", i);
    size++;
}
console.log("string size=", size);

let j= 20;
do{
    console.log("Nico Robin");
    j++;
}while(j<=10);


let student1={
    name: "tony tony chopper",
    age: 16,
    cgpa: 7.5,
    ispass:true
};
for(let key in student1){
    console.log(key, "values=", student1[key]);
}

let str2= "hello";
console.log(str2.slice(0,3));
console.log(str2.slice(1));

let res = str + str2;
console.log(res);

function countVowels(str11){
    let count= 0;
    for(const char of str11){
        if(char==="a" || char==="e" || char==="i" || char==="o" || char==="u"){
            count++;
        }
    }
    return count;
}
