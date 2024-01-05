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
