
let age = 14;

// if
function justIf() {
  age = 29;

  if (age >= 18) {
    return console.log("You can drive. *from justIf");
  }
}

justIf();

// ==  eşit mi
// >=  büyük eşit mi
// <=  küçük eşit mi
// !=  eşit değil mi
// === tam eşit mi ( type'i da esit mi )
// !== tam eşit değil mi ( type'i da esit degil mi )

//----------------------------------------------------------------

function canYouBuy() {
  let myMoney = 100;
  let price = 50;

  if (myMoney >= 50 || price <= 100) {
    return console.log("You can buy. *from canYouBuy");
  }
}

canYouBuy();

//----------------------------------------------------------------

// if...else
function ifElse() {
  age = 18;

  if (age >= 18) {
    return console.log("You can drive. *from ifElse");
  } else {
    return console.log("You can't drive. *from ifElse");
  }
}

ifElse();

//----------------------------------------------------------------

// if...else if...else
function ifElseIfElse() {
  age = 16;

  if (age >= 18) {
  console.log("You can drive. *from ifElseIfElse");
  } else if (age >= 16 && age < 19 && age != 17) {
    console.log("You can drive bike. *from ifElseIfElse");
  } else {
  console.log("You can't drive. *from ifElseIfElse");
  }
}

ifElseIfElse();

//----------------------------------------------------------------

function ifElseIfElse2() {
  const pet = "dog";

  if (pet === "lizard") {
    console.log("I own a lizard. *from ifElseIfElse2");
  } else if (pet === "dog") {
    console.log("I own a dog *from ifElseIfElse2");
  } else if (pet === "cat") {
    console.log("I own a cat *from ifElseIfElse2");
  } else if (pet === "snake") {
    console.log("I own a snake *from ifElseIfElse2");
  } else if (pet === "parrot") {
    console.log("I own a parrot*from ifElseIfElse2");
  } else {
    console.log("I don't own a pet *from ifElseIfElse2");
  }
}

ifElseIfElse2();

//----------------------------------------------------------------

function switchCaseVersion() {
  const pet = "dog";

  switch (pet) {
    case "lizard":
      console.log("I own a lizard *from switchCaseVersion");
      break;
    case "dog":
      console.log("I own a dog *from switchCaseVersion");
      break;
    case "cat":
      console.log("I own a cat *from switchCaseVersion");
      break;
    case "snake":
      console.log("I own a snake *from switchCaseVersion");
      break;
    case "parrot":
      console.log("I own a parrot *from switchCaseVersion");
      break;
    default:
      console.log("I don't own a pet *from switchCaseVersion");
      break;
  }
}

switchCaseVersion();

//----------------------------------------------------------------

// nested if...else
function nestedIfElse() {
  age = 18;
  let hasCar = false;
  let hasMoney = true;

  if (age >= 18) {
    if (hasCar && hasMoney) {
      console.log("You can drive. *from nestedIfElse");
    } else {
      console.log("You can drive. But you don't have car or money. *from nestedIfElse");
    }
  } else {
    console.log("You can't drive. *from nestedIfElse");
  }
}

nestedIfElse();

//----------------------------------------------------------------

// body of if...else with single statement
function bodyOfIfElse() {
  if (age >= 18) console.log("You can drive. *from bodyOfIfElse");
}

bodyOfIfElse();

//----------------------------------------------------------------

// AND (&&) operator
// && ve AND (condition1 = true && condition2 = true) = true
// && ve AND (condition1 = true && condition2 = false) = false
// && ve AND (condition1 = false && condition2 = true) = false
// && ve AND (condition1 = false && condition2 = false) = false


// OR (||) operator
// || veya OR (condition1 = true || condition2 = false) = true
// || veya OR (condition1 = false || condition2 = true) = true
// || veya OR (condition1 = true || condition2 = false) = true
// || veya OR (condition1 = false || condition2 = false) = false


// NOT (!) operator
// ! değil NOT (condition = true) = false
// ! değil NOT (condition = false) = true
function notOperator() {
  let name;

  if (!name) {
    console.log("name is not defined. *from notOperator");
  }
}

notOperator();

//----------------------------------------------------------------


// (ternary) operator
function ternaryOperator() {
  age = 18;

  age >= 18 ? console.log("You can vote. *from ternaryOperator") : console.log("You can't vote. *from ternaryOperator");
}

ternaryOperator();

// ----------------------------------------------------------------

// Rest Operator

function myBio(firstName, lastName, ...otherInfo) {
  return console.log(otherInfo + " *from myBio - Rest Operator");
}

myBio('Filiz', 'Altinturk', 'Ghost', 'Front-End Developer', 'Female', 'Sing');


// Rest Operator Works in a Destructuring Assignment

  // In Arrays
function restOperatorInDestructuring(){
    // Without Destructuring
  const data = [ "Filiz", "Altinturk"]
  const firstName = data[0];
  const lastName = data[1];
  console.log(firstName, lastName + " *from Without Destructuring");

    // With Destructuring
  const [name, surname] = [ "Filiz", "Altinturk"];
  console.log(name, surname  + " *from With Destructuring");

    // With Destructuring and Rest Operator
  const [myName, myLastName, ...otherInfo] = [ "Filiz", "Altinturk", "Ghost", "Front-End Developer", "Female", "Sing" ];
  console.log(otherInfo + " *from With Destructuring and Rest Operator");
}

restOperatorInDestructuring();

// ----------------------------------------------------------------

  // In Objects

  function restOperatorInDestructuring2(){

    // Without Destructuring
   const userDetail = {
      firstName: "Filiz",
      lastName: "Altinturk",
      companyName: "Ghost",
      profession: "Front-End Developer",
      gender: "Female"
    }
    let firstName = userDetail.firstName;
    let lastName = userDetail.lastName;

    console.log(firstName, lastName + " *from restOperatorInDestructuring2 - Without Destructuring")

    // With Destructuring and Rest Operator
    const { name, surname, ...otherInfo } = {
      name: "Filiz",
      surname: "Altinturk",
      company: "Ghost",
      job: "Front-End Developer"
    }
    console.log(otherInfo + " *from restOperatorInDestructuring2 - With Destructuring and Rest Operator");
  }

  restOperatorInDestructuring2();


const [user, user2]= [{
  name: "Filiz",
  surname: "Altinturk",
}, {
  name: "John",
  surname: "Doe"
}]

console.log(user2.name, user2.surname);

// ----------------------------------------------------------------

