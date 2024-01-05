// alert("hello world");
// console.log(1);

let email = "jack@gmail.com";
let result = email.lastIndexOf("@");
let result1 = email.slice(1, 4);
let result2 = email.substr(1, 4);
let result3 = email.replace("a", "q");
console.log(result);
console.log(result1);
console.log(result2);
console.log(result3);

let radius = 10;
const pi = 3.14;
console.log(radius, pi);

//math
console.log(10 / 2);
let result4 = radius % 3;
let result5 = pi * radius * 2;
console.log(result4);
console.log(result5);

let jack = [1, 2, 3];
let result6 = jack.concat([4, 5]);
console.log(result6);

let result7 = jack.push("hhhh");
let result8 = jack.pop("hhhh");
console.log(result8);

let names = ["mario", "luigi", "peach"];
let result9 = names.includes("luigi");
console.log(result9);

//loop
for (let i = 0; i < 5; i++) {
  console.log("in loop", i);
}
console.log("loop done");

const name = ["hi", "hello", "nihao"];
for (let i = 0; i < name.length; i++) {
  let html = `<div>${name[i]}</div>`;
  console.log(html);
}

let i = 0;
while (i < 5) {
  console.log("loop", i);
  i++;
}

do {
  console.log("loop2", i);
  i++;
} while (i < 10);

const grade = "D";
switch (grade) {
  case "A":
    console.log("you got A");
    break;
  case "B":
    console.log("you got B");
    break;
  case "D":
    console.log("you got D");
    break;
  default:
    console.log("invalid");
}

// function

//function declaration
function greet() {
  console.log("hi there");
}

const greet1 = () => console.log("arrow hi there");

greet();
greet1();
// function expression
const speak = function () {
  console.log("goodbye");
};
speak();

const say = function (name) {
  console.log(`good day ${name}`);
};

say("xiaohan");

const word = function (name = "luigi", time = "night") {
  console.log(`good ${time}, ${name}`);
};

word("mario", "morning");

//regular
const calcArea = function (radius) {
  return 3.14 * radius * 2;
};

//arrow
const calcArea1 = (radius) => {
  return 3.14 * radius * 2;
};

const calcArea2 = (radius) => 3.14 * radius * 2;

const area = calcArea2(5);
console.log("area is", area);

// callback & foreach
const myFunc = (callbackFunc) => {
  let value = 50;
  callbackFunc(value);
};

myFunc(function (value) {
  console.log(value);
});

const people = ["hi", "hello", "nihao"];
// people.forEach(function (person) {
//   console.log(person);
// });

// people.forEach((person) => {
//   console.log(person);
// });

const logPerson = (person, index) => {
  console.log(`${index} - ${person}`);
};

people.forEach(logPerson);

const ul = document.querySelector(".people");
const people1 = ["mario", "luigi", "peach", "dave"];
let html = "";
people1.forEach(function (person) {
  html += `<li style="color: purple">${person}</li>`;
});

console.log(html);
ul.innerHTML = html;

//object
let user = {
  name: "crystal",
  age: 30,
  email: "crystal@gmail.com",
  location: "berlin",
  blogs: [
    { title: "why mac and cheese", likes: 30 },
    { title: "Rest Day need rest", likes: 50 },
  ],
  login: function () {
    console.log("the user logged in");
  },
  logout: function () {
    console.log("the user logged out");
  },
  logBlogs: function () {
    this.blogs.forEach((blog) => {
      console.log(blog.title, blog.likes);
    });
  },
};

console.log(user);
console.log(user.name);
console.log((user.age = 35));
console.log(user["name"]);

user.login();
user.logout();
user.logBlogs();

//math object

console.log(Math.PI);
console.log(Math.E);
const area1 = 7.7;
console.log(Math.round(area1));
console.log(Math.floor(area1));
console.log(Math.ceil(area));
console.log(Math.trunc(area1));

// use case - random numbers
const random = Math.random();
console.log(random);
console.log(Math.round(random * 100)); //random number 1-100

// primitive values
let scoreOne = 50;
let scoreTwo = 50;

//console.log(`scoreOne: ${scoreOne}`, `scoreTwo:${scoreTwo}`);

scoreOne = 100;
console.log(`scoreOne: ${scoreOne}`, `scoreTwo:${scoreTwo}`);

//reference values
const userOne = { name: "ryi", age: 30 };
const userTwo = userOne;
console.log(userOne, userTwo);
userOne.age = 40;
console.log(userOne, userTwo);
userOne.name = "chunli";
console.log(userOne, userTwo);

// DOM
const para = document.querySelector("p");
const para1 = document.querySelector(".error");
const para2 = document.querySelector("div.error");
console.log(para);
console.log(para1);
console.log(para2);
const para3 = document.querySelector("body > h1");
console.log(para3);

const paras = document.querySelectorAll("p");
console.log(paras[1]);

// paras.forEach((para) => {
//   console.log(para);
// });

const errors = document.querySelectorAll(".error");
console.log(errors);
errors.forEach((error) => {
  console.log(error);
});

//get element by ID
const title = document.getElementById("page-title");
console.log(title);

//get elements by class name
const errorClass = document.getElementsByClassName("error");
console.log(errorClass);
console.log(errorClass[1]);

//get elements by tag name
const paragraph = document.getElementsByTagName("p");
console.log(paragraph);
console.log(paragraph[1]);
// Remember, get element by ID/class/tag is not exactly the same with selectorAll
// The result CANNOT use forEach method

para.innerText = "Jack is handsome";

paras.forEach((para) => {
  para.innerText += " new tezt";
  console.log(para.innerText);
});

const content = document.querySelector(".content");
content.innerHTML += "<h2> This is a new h2 </h2>";

const peopleL = ["mario", "luigi", "yoshi"];
peopleL.forEach((person) => {
  content.innerHTML += `<p>${person}</p>`;
});

const link = document.querySelector("a");
link.setAttribute("href", "http://www.facebook.com");
link.innerText = "The Net";

const mssg = document.querySelector("p");
console.log(mssg.getAttribute("class"));
mssg.setAttribute("class", "hello");
mssg.setAttribute("style", "color:green");

const title1 = document.querySelector("h1");
//title1.setAttribute("style", "margin:50px");
console.log(title1.style);
console.log(title1.style.color);

title1.style.margin = "100px";
title1.style.color = "crimson";
title1.style.fontSize = "56px";
title1.style.margin = "";

const content1 = document.querySelector(".remove");
console.log(content.classList);
content1.classList.add("sucess");
content1.classList.remove("sucess");

const graphs = document.querySelectorAll("p");
graphs.forEach((graph) => {
  console.log(graph.textContent);
  if (graph.textContent.includes("error")) {
    graph.classList.add("remove");
  }
  if (graph.textContent.includes("success")) {
    graph.classList.add("success");
  }
});
