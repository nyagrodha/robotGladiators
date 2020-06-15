var playerInfo = {
  name: window.prompt("What's your 🤖robot's name?"),
  health: 100,
  attack: 10,
  money: 10,
}

// You can also log multiple values at once like this
console.log("Your robot, " + playerInfo.name + ", packs an attack value of " + playerInfo.attack + ", and has " + playerInfo.health + "% power remaining.");

var enemyInfo = [
  {
    name: "Roborto🤖",
    attack: 12
  },
  {
    name: "Amy🤖Android",
    attack: 13
  },
  {
    name: "Robo🤖Trumble",
    attack: 14
  }
];

var fight = function (enemyName) {
  console.log(enemy);
  // repeat and execute as long as the enemy robot is alive
  while (enemyHealth > 0 && playerInfo.health > 0) {
    // ask the user if they wish to fight or to skip the fight.
    var promptFight = window.prompt("Would you like to FIGHT or to SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    // moving skip condition here
    if (promptFight === "skip" || promptFight === "SKIP") {
      //confirm user wishes to skip
      var confirmSkip = window.confirm("Are you sure you'd like to skip?")

      // if yes (true), leave the fight
      if (confirmSkip) {
        window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
        playerInfo.money = playerInfo.money - 2;
        if (playerInfo.money > 1) {
          console.log(playerInfo.name + "'s got " + playerInfo.money + " trinkets. ");
        } else {
          console.log(playerInfo.name + "'s got " + playerInfo.money + " trinket. ");
        }
        break;
      }
    }
    console.log(promptFight);
    //Subtract the value of `playerInfo.attack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    // if player chooses to fight, then fight
    enemyHealth = enemyHealth - playerInfo.attack;
    // Log a resulting message to the console so we know that it worked.
    console.log(playerInfo.name + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + "% power remaining.");
    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(playerInfo.name + " has destroyed " + enemyName);
      break;
    } else {
      window.alert(enemyName + " still has " + enemyHealth + "% power remaining.");
    }
    // Subtract the value of `enemyAttack` from the value of `playerInfo.health` and use that result to update the value in the `playerInfo.health` variable.
    playerInfo.health = playerInfo.health - enemyAttack;
    // Log a resulting message to the console so we know that it worked.
    console.log(enemyName + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + "% power remaining.");
    // check player's health
    if (playerInfo.health <= 0) {
      window.alert(enemyName + " has decimated " + playerInfo.name + ".");
      break;
    } else {
      window.alert(playerInfo.name + " still has " + playerInfo.health + "% power remaining.");
    }
  }
}

var shop = function () {
  // ask the player what they'd like to do
  var shopOptionPrompt = window.prompt("Would you like to REFILL your power, UPGRADE your attack, or LEAVE the store? Please enter 'REFILL,' or 'UPGRADE,' or 'LEAVE' to choose.");
  switch (shopOptionPrompt) {
    case "REFILL": // new case
    case "refill":
      if (playerInfo.money >= 7) {
        window.alert("Refilling " + playerInfo.name + "'s power by 20% for 7 trinkets.");

        // increase health and decrease money
        playerInfo.health = playerInfo.health + 20;
        playerInfo.money = playerInfo.money - 7;
      } else {
        window.alert("You don't have enough trinkets at this time.");
      }
      break;
    case "UPGRADE": // new case
    case "upgrade":
      if (playerInfo.money >= 7) {
        window.alert("Upgrading " + playerInfo.name + "'s attack by 6 for 7 trinkets.");

        // increase attack and decrease money
        playerInfo.attack = playerInfo.attack + 6;
        playerInfo.money = playerInfo.money - 7;
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

var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;
}

var startGame = function () {
  // reset player stats
  playerInfo.health = 100;
  playerInfo.attack = 10;
  playerInfo.money = 10;
  for (var i = 0; i < enemyInfo.length; i++) {
    if (playerInfo.health > 0) {
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
      var pickedEnemyObj = enemyInfo[i];
      pickedEnemyObj.health = randomNumber(40, 60);
      fight(pickedEnemyObj);
      if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
        // ask if user wants to use the store before next round
        var storeConfirm = window.confirm("This battle is over. Would you like to visit the shop before the next round?");

        //if yes, take the user to the shop
        if (storeConfirm) {
          shop();
        }
      }
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
  if (playerInfo.health > 0) {
    window.alert("Great job! Your robot's survived the game! You have a score of " + playerInfo.money + ".");
  } else {
    window.alert("The game has now ended. Let's see how you did!");
  }
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
