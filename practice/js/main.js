// INTERROGATING THE DOM

// let foundYou = document.getElementById("overview");
// console.log(foundYou.innerText);

// foundYou.innerText = ">>I Changed You<<";

// let foundYou = document.getElementsByTagName("p");
// console.log(foundYou);
// console.log(foundYou[2].innerText);
// foundYou[1].innerText = ">>I CHANGED YOU<<";

// let foundYou = document.getElementsByName("description");
// console.log(foundYou[0].innerText);

// foundYou[0].innerHTML = ">>I CHANGED YOU";

// let foundYou = document.getElementsByClassName("smallCenter");
// console.log(foundYou);
// console.log(foundYou[0].innerText);
// foundYou[0].innerText = `<<NEW STUFF<<`;

// let foundYou = document.querySelectorAll("ul#lp_list li");
// console.log(foundYou[0].innerText);
// console.log(foundYou.length);
// foundYou[2].innerText = "<<Change-o-rama<<";

// let foundYou = document.getElementById("sw_list");
// console.log(foundYou);

// let childArray = foundYou.getElementsByTagName("li");
// console.log(childArray);

// childArray[0].innerText = ">>These Items>>";
// childArray[1].innerText = ">>Have Just>>";
// childArray[2].innerText = ">>Been Changed>>";

// let newOptions = ["Red", "Blue", "Green"];

// let foundYou = document.getElementById("myForm");
// console.log(foundYou);

// let selectArray = foundYou.getElementsByTagName("option");
// console.log(selectArray);

// for (let i = 0; i < selectArray.length; i++) {
//   selectArray[i].innerText = newOptions[i];
// }

let foundYou = document.getElementById("myForm");
console.log(foundYou);

let selectArray = foundYou.getElementsByTagName("input");
console.log(selectArray);

for (let i = 0; i < selectArray.length; i++) {
  console.log(selectArray[i].value);
}

// EXPLORING SWITCH

// const myFunction = () => {
//   let elem = document.getElementById("chooseMe");
//   let fortuneNum = elem.options[elem.selectedIndex].value;
//   let fortuneMessage;
//   console.log(fortuneNum);

//   switch (+fortuneNum) {
//     case 1:
//     case 6:
//       fortuneMessage = "You will win the lottery!";
//       break;
//     case 2:
//     case 7:
//       fortuneMessage = "Your will win a new car!";
//       break;
//     case 3:
//       fortuneMessage = "You will NOT be attacked by ninjas!";
//       break;
//     case 4:
//     case 8:
//       fortuneMessage = "A shiny new computer will arrive at your home!";
//       break;

//     default:
//       dayName = "You have 3 hours to live, so finish this course";
//   }

//   document.getElementById("feedback").innerHTML = `${fortuneMessage}`;
// };

// EXPLORING LOOPS

// const showStuff = (elem) => {
//   let elementID = document.getElementById(elem);

//   for (let i = 0; i < elementID.length; i++) {
//     // console.log(elementID[i].text);
//     // console.log(elementID[i].value);
//     // console.log(elementID[i].selected);
//     if (elementID[i].selected === true) {
//       var x = elementID[i].text;
//     }
//   }
//   return x;
// };

// const showMore = (elem) => {
//   let elementID = document.getElementsByName(elem);
//   let mycheck = "";
//   for (let i = 0; i < elementID.length; i++) {
//     // console.log(elementID[i].checked);
//     // console.log(elementID[i].value);
//     if (elementID[i].checked === true) {
//       mycheck += elementID[i].value + "<br>";
//     }
//   }
//   return mycheck;
// };

// const evaluatePage = () => {
//   let feedbackState = showStuff("state");
//   let feedbackHome = showStuff("home");
//   let feedbackLight = showMore("bulb");
//   document.getElementById(
//     "output"
//   ).innerHTML = `${feedbackState}, ${feedbackHome}, ${feedbackLight}`;
// };

// EXPLORING FUNCTIONS

// const floor = (diameter) => {
//   let radius = diameter / 2;
//   let floorArea = Math.PI * (radius * radius);
//   return floorArea;
// };

// const walls = (diameter, height) => {
//   let radius = diameter / 2;
//   let circumference = 2 * Math.PI + radius;
//   let wallArea = circumference * height;
//   return wallArea;
// };

// const materialsNeeded = () => {
//   let d = document.getElementById("across").value;
//   let h = document.getElementById("height").value;

//   let carpetNeeded = Math.ceil(floor(d));
//   let paintNeeded = Math.ceil(walls(d, h));

//   console.log(`Carpet needed: ${carpetNeeded} sqft.`);
//   console.log(`Paint needed: ${paintNeeded} sqft.`);
// };

// const test = () => {
//   // alert("Hello, World!");
//   console.log("Hello, World!");
// };

// test();
