var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
console.log("Your robot, " + playerName + ", packs an attack value of " + playerAttack + ", and has " + playerHealth + "% power remaining.");

var enemyNames = ["Roborto🤖", "Amy🤖Android", "Robo🤖Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function (enemyName) {
  // repeat and execute as long as the enemy robot is alive
  while (enemyHealth > 0 && playerHealth > 0) {
    // ask the user if they wish to fight or to skip the fight.
    var promptFight = window.prompt("Would you like to FIGHT or to SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    // moving skip condition here
    if (promptFight === "skip" || promptFight === "SKIP") {
      //confirm user wishes to skip
      var confirmSkip = window.confirm("Are you sure you'd like to skip?")

      // if yes (true), leave the fight
      if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        playerMoney = playerMoney - 2;
        console.log("playerMoney: " + playerMoney);
        break;
      }
    }
    console.log(promptFight);
    //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    // if player chooses to fight, then fight
    enemyHealth = enemyHealth - playerAttack;
    // Log a resulting message to the console so we know that it worked.
    console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + "% power remaining.");
    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(playerName + " has destroyed " + enemyName);
      break;
    } else {
      window.alert(enemyName + " still has " + enemyHealth + "% power remaining.");
    }
    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    playerHealth = playerHealth - enemyAttack;
    // Log a resulting message to the console so we know that it worked.
    console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + "% power remaining.");
    // check player's health
    if (playerHealth <= 0) {
      window.alert(enemyName + " has decimated " + playerName + ".");
      break;
    } else {
      window.alert(playerName + " still has " + playerHealth + "% power remaining.");
    }
  }
}

<<<<<<< HEAD
=======
var shop = function () {
  // ask the player what they'd like to do
  var shopOptionPrompt = window.prompt("Would you like to REFILL your power, UPGRADE your attack, or LEAVE the store? Please enter 'REFILL,' or 'UPGRADE,' or 'LEAVE' to choose.");
  switch (shopOptionPrompt) {
    case "REFILL": // new case
    case "refill":
      if (playerMoney >= 7) {
        window.alert("Refilling " + playerName + "'s power by 20% for 7 trinkets.");

        // increase health and decrease money
        playerHealth = playerHealth + 20;
        playerMoney = playerMoney - 7;
      } else {
        window.alert("You don't have enough trinkets at this time.");
      }
      break;
    case "UPGRADE": // new case
    case "upgrade":
      if (playerMoney >= 7) {
        window.alert("Upgrading " + playerName + "'s attack by 6 for 7 trinkets.");

        // increase attack and decrease money
        playerAttack = playerAttack + 6;
        playerMoney = playerMoney - 7;
      } else {
        window.alert("You don't have enough trinkets at this time.");
      }
      break;
    case "LEAVE": // new case
    case "leave":
      window.alert("Leaving the store.");

      // do nothing so function will end
      break;
    default:
      window.alert("You didn't enter a valid option. Please try again.");

      // call shop() again to force player to pick a valid option
      shop();
      break;
  }
}

>>>>>>> feature/shop
var startGame = function () {
  // reset player stats
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;
  for (var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
      var pickedEnemyName = enemyNames[i];
      enemyHealth = 50;
      fight(pickedEnemyName);
<<<<<<< HEAD
=======
      if (playerHealth > 0 && i < enemyNames.length - 1) {
        // ask if user wants to use the store before next round
        var storeConfirm = window.confirm("This battle is over. Would you like to visit the shop before the next round?");

        //if yes, take the user to the shop
        if (storeConfirm) {
          shop();
        }
      }
>>>>>>> feature/shop
    } else {
      window.alert("Your robot has been lost in battle. Game over!");
      break;
    }
  }
  // play again
  // startGame();
  // endGame();
};

startGame();

var endGame = function () {
  // if player is still alive, player wins!
  if (playerHealth > 0) {
    window.alert("Great job! Your robot's survived the game! You have a score of " + playerMoney + ".");
  } else {
    window.alert("The game has now ended. Let's see how you did!");
  }
<<<<<<< HEAD
   // ask the player if they'd like to play again
   var playAgainConfirm = window.confirm("Would you like to play again?");
   if (playAgainConfirm) {
     // restart the game
     startGame();
   } else {
     window.alert("Thank you for playing Robot Gladiators! Come back soon!");
   }
 }
 endGame();
=======
  // ask the player if they'd like to play again
  var playAgainConfirm = window.confirm("Would you like to play again?");
  if (playAgainConfirm) {
    // restart the game
    startGame();
  } else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  }
}
endGame();
>>>>>>> feature/shop
