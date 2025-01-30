// create array of favorite movies
let faveMovies = ["Never Let Me Go", "The Kindergarten Teacher", "Meek's Cutoff", "Eighth Grade", "Gone with the Wind"];
// prompt user to enter their own favorite movie
userAnswer = window.prompt("What is your favorite movie?");
faveMovies.push(userAnswer);
let stringyMovies = faveMovies.toString();
console.log("Look at all our favorite movies!!", stringyMovies)
