// create an array with my favorite games as objects inside array
const faveGames = [
  {game: "Monopoly",
    type: "board",
    numberPlayers: "2 +",
    shortDesc: "the evil banker game",
  },
  {game: "Head's Up Seven Up",
    type: "childhood classroom",
    numberPlayers: "3+",
    shortDesc: "how to tell who likes whom, elementary-school style",
  },
  {game: "Tabboo",
    type: "party",
    numberPlayers: "4+",
    shortDesc: "pairs of people testing how well they know one another"
  }
]
const whichGame = window.prompt("I have three games in my collection! Which shall we play? Select a number between 1 and 3.");
//if(whichGame === faveGames[1].game);
window.alert("You have selected " + faveGames[whichGame-1].game + ", a " + faveGames[whichGame-1].type + " game for " + faveGames[whichGame-1].numberPlayers + " players" + "! This game can be described as: " + faveGames[whichGame-1].shortDesc + ".")