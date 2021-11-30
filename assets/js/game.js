// var playerName = 'Clank McKrank';
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);

// fight function
var fight = function(enemyName) {
  while(playerHealth > 0 && enemyHealth > 0) {
    // ask player if they'd like to fight or run
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

    // if player chooses to skip
    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 2;
        console.log("playerMoney", playerMoney);
        break;
      }
    }

    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );

    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");

      // Award Player Money for Winning
      playerMoney = playerMoney + 20;

      // Leave while() loop since enemy is dead
      break;
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    // remove players's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
      break;
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
  }
};

// Function to start a new game
var startGame = function() {
  // Reset Player Stats
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;

for (var i = 0; i < enemyNames.length; i++) {
  // if player is still alive, keep fighting
  if (playerHealth > 0) {
    // let player know what round it is
    window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));

    // pick new enemy to fight based on the index of enemyNames array
    var pickedEnemyName = enemyNames[i];

    // reset enemyHealth before starting New Fight
    enemyHealth = 50;

    // Pass pickedEnemyName variable's value into the fight function
    fight(pickedEnemyName);
  }
  // if player isn't alive, stop the game
  else {
    window.alert('You have lost your robot in battle! Game Over!');
    break;
  }
}

// After Loop ends, Player is either out of health or enemies to fight, run endGame Function
endGame();
};

// Function to end the Entire Game
var endGame = function() {
  window.alert("The game has now ended. Let's see how you did!");

  // If Player is still alive, Player wins!
  if (playerHealth > 0) {
    window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
  } else {
    window.alert("You've lost your robot in battle!");
    
  // Ask Player if they'd like to play again
  var playAgainConfirm = window.confirm("Would you like to play again?");

  if (playAgainConfirm) {
    // Restart the Game
    startGame();
  } else {
    window.alert("Thank you for playing Robot Gladiators! Come Back Soon!");
  }
};
}
// Start the game when the page loads
startGame();