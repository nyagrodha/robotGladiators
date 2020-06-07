// this creates a window prompting user input
var playerName = window.prompt("What's your robot's name?");
// default health
var playerHealth = 100;
// check to see if value of playerHealth variable is greater than zero
if (playerHealth > 0) {
    console.log("Your robot is still in the game!");
}
// default player attack
var playerAttack = 10;
var playerMoney = 10;
// log multiple values at once

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;


// create a fight variable

var fight = function(enemyName) {
    // repeat and execute as long as the enemy robot is alive
    while(enemyHealth > 0) {
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    // Check to see if the promptFight variable is working
    console.log(promptFight);
    // if player choses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );
  
    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health remaining.");
    }
  
    // remove player's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );
  
    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    // if player choses to skip
  } else if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm user wishes to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // if yes, leave fight
    if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        //subtract money from playerMoney for skipping
        playerMoney = playerMoney - 2;
    }
    // if no, ask question again by running fight() again
    else {
        fight();
    }
  
    window.alert(playerName + " has chosen to skip the fight!");
  } else {
    window.alert("You need to pick a valid option. Try again!");
  }
}
    }
    // Alert users that they are starting the round
    // window.alert("Welcome to Robot Gladiators!");

    // Prompt to fight
    
// call the function with fight var
for(var i = 0; i < enemyNames.length; i++) {
    debugger;
    // call fight function with enemy robot
    fight(enemyNames[i]);
}

// Game states
// "WIN" - player has defeated all enemy robots
//      * Fight all enemy robots
//      * Defeat each enemy robot







// "LOSE" - Player robot's health is zero or less