// what is the DOM? the below makes the window an object
console.log(window.document.body.children);
console.log(window.document.body.children[1]);
// in DOM you are using Javascript to access HTML in your page
// go look in console log to see all this stuff/properties
// helpers to help us "find" HTML elements
// 1. accessing existing element and changing them
// 2. adding new elements to existing elements
// getElementByTagName or ID is first helper
// console.log(document.getElementsByID("target"));
// always make sure HTML divs are unique!
// getElementsByClassName -- classes used more than once
console.log(document.getElementsByClassName("bob"));
// const target = document.getElementsById("target");
const target = document.getElementsById("target");
console.log(target);
target.classList.add("red");
target.style.width="200px";
target.style.height = "200px";
target.style.color = "white";
target.style.fontSize = "24px";
target.innerHTML = "DOM Scripting for the win";
const colors = ["orange", "green", "blue", "indigo", "violet"];
for(let loopVar = 0; loopVar < colors.length; loopVar++) {
    const newDiv1 = document.createElement("div");
    newDiv1.style.width = "50px";
    newDiv1.style.height = "50px";
    newDiv1.style.backgroundColor = "orange";
    // now need to attach to an element
    target.appendChild(newDiv1);
}
// Events and event handlers
target.addEventListener("click", () => {
    console.log("I've been clicked");
    document.body.style.backgroundColor = "red";
    // add new div
    const newHeading = document.createElement("h1");
    newHeading.innerHTML = "Howdy Dandy";
    target.appendChild(newHeading);
})
/* window.addEventListener("load", () => {
    console.log("window has loaded");
})
 */

//timers???!!!
setTimeout(() => {
    target.style.backgroundColor = "blue";
}, 5000);
// set interval occurs forever until you say stop
const myInterval = setInterval(() => {
    console.log(new Date());
}, 5000);
setTimeout(() => {
    clearInterval(myInterval);
    console.log("hopefully this has been cleared");
}, 15000);