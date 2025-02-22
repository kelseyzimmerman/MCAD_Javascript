// select empty div and assign to a variable
const myEmptyDiv = document.querySelector("#myEmptyDiv");
// now we want to put h1 inside the variable
// create a new element
const heading = document.createElement('h1');
heading.innerHTML = "The llamas! The llamas have escaped!!!!";
heading.style.cursor = 'pointer';
heading.addEventListener('click', handleHeadingClick);
myEmptyDiv.appendChild(heading);
// can add event listeners to any element on the DOM
function handleHeadingClick() {
    console.log('Heading has been clicked');
    document.body.style.backgroundColor = "green";
}