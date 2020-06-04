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

// log multiple values at once

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

// create a fight variable

var fight = function() {
    // Alert users that they are starting the round
    window.alert("Welcome to Robot Gladiators!");
    // subtract the value of 'playerAttack' from 'enemyHealth' and use this result to update the value in the 'enemyHealth' variable
    enemyHealth = enemyHealth - playerAttack;
    // Log a resulting message to the console so we know that it worked.
    console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );
    // check enemy's health
    if(enemyHealth <= 0) {
        window.alert(playerName + " has destroyed " + enemyName + ".")
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + "% power left.");
    }
    //Subtract the value of 'enemyAttack' from the value of 'playerHealth', and use that result to update the value in 'playerHealth' variable.
    playerHealth = playerHealth - enemyAttack;
    // Log a resulting message to the console so we know that it worked.
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );
    // check player's health
    if (playerHealth <= 0) {
        window.alert(enemyName + " has decimated " + playerName + ".");
    }
    else {
        window.alert(playerName + " still has " + playerHealth + "% power remaining.");
    }
};

// call the function with fight var

fight();