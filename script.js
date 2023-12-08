import { setName, getScoreBoard } from './storage.js';

// _____________________________________________________
// State variables
// _____________________________________________________

const startBtnEl = document.querySelector('#start-btn');
console.log(startBtnEl);
const userNameInputEl = document.querySelector('#userNameInput');
const scoreBoardEl = document.querySelector('#scoreBoard');
let userName;
//create local storage
//point system, variable

//

const scoreBoard = getScoreBoard();

// _____________________________________________________
// Event listeners
// _____________________________________________________

startBtnEl.addEventListener('click', function (e) {
  e.preventDefault;
  if (userNameInputEl.value == '') {
    alert(`Please write your Nickname`);
  } else {
    setName(userNameInputEl.value);
    window.location.href = 'game.html';
  }
});

export let sortedPlayers = (players) => {
  return players.sort((a, b) => {
    return b.score - a.score;
  });
};

let players = sortedPlayers(scoreBoard);
for (let i = 0; i < 7; i++) {
  let scoreLiEl = document.createElement('li');
  scoreLiEl.innerText = `${players[i].name} : ${players[i].score}`;
  scoreBoardEl.append(scoreLiEl);
}
