'use strict';

var userChoiсe = prompt("Let's play! Rock, paper or scissors?", ''),
  computerChoiсe = Math.random();

if (computerChoiсe <= 0.33) {
  computerChoiсe = 'rock';
} else if (computerChoiсe > 0.33 && computerChoiсe <= 0.66) {
  computerChoiсe = 'paper';
} else {
  computerChoiсe = 'scissors';
}
console.log('Computer chose: ' + computerChoiсe);

if (userChoiсe === null) {
  alert('Oh, come on! Hope you will be back soon!');
} else {
  userChoiсe = userChoiсe.toLowerCase();
}

if (userChoiсe === computerChoiсe) {
  alert('You played in a draw!');
} else if (userChoiсe === 'rock') {
  if (computerChoiсe === 'scissors') {
    alert(`User: ${userChoiсe} Computer: ${computerChoiсe} Win: 'Rock win!'`);
  } else if (computerChoiсe === 'paper') {
    alert(`User: ${userChoiсe} Computer: ${computerChoiсe} Win: 'Paper win!'`);
  }
} else if (userChoiсe === 'scissors') {
  if (computerChoiсe === 'rock') {
    alert(`User: ${userChoiсe} Computer: ${computerChoiсe} Win: 'Rock win!'`);
  } else if (computerChoiсe === 'paper') {
    alert(
      `User: ${userChoiсe} Computer: ${computerChoiсe} Win: 'Scissors win!'`
    );
  }
} else if (userChoiсe === 'paper') {
  if (computerChoiсe === 'rock') {
    alert(`User: ${userChoiсe} Computer: ${computerChoiсe} Win: 'Paper win!'`);
  } else if (computerChoiсe === 'scissors') {
    alert(
      `User: ${userChoiсe} Computer: ${computerChoiсe} Win: 'Scissors win!'`
    );
  }
} else {
  alert('It is not rock, paper or scissors. Try again!');
}
