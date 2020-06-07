//Prompt the user with a prompt
var playerName = window.prompt("What's your 🤖robot's name?");
var playerHealth = 100;
var playerAttack = 10;
// add a playerMoney variable to penalize player if they choose to skip
var playerMoney = 10;

// Check to see iff the value of the playerHealth is greater than 0
// if (playerHealth > 0) {
//     console.log("Your 🤖robot's still in the game.");
// }

// console.log(playerName + " the 🤖robot", playerAttack, playerHealth);

var enemyNames = ["🤖Roborto", "Amy🤖Android", "Robo🤖Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;
// console.log(enemyNames.length);



var fight = function(enemyName) {
    // repeat and execute so long as enemy robot has power remaining
    while(enemyHealth > 0) {
    //Alert users that they are starting the round
    // window.alert("Welcome to Robot Gladiators!");
    var promptFight = window.prompt("Would you like to FIGHT or to SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    // if player chooses to fight, fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
    // Subtract the value of 'playerAttack' from the value of enemyHealth
    enemyHealth = enemyHealth - playerAttack;
    
    // Log a resulting message to the console so we know it worked
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + "% power remaining."
        );
        
    //Check enemy health
    if (enemyHealth <= 0) {
        window.alert(playerName + " has decimated " + enemyName + "!");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + "% power remaining.");
    }
    //Subtract the value of enemyAttack from the value of playerHealth and use that result to update the value in the 'playerHealth' variable.
    playerHealth = playerHealth - enemyAttack;
    // Log a resulting message to the console so we know that it worked
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + "% power remaining."
    )
    // Check player's health
    if (playerHealth <= 0) {
        window.alert(enemyName + " has destroyed " + playerName);
    } else {
        window.alert(playerName + " still has " + playerHealth + "% power remaining.");
    }
    } else if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm user wishes to skip
        var confirmSkip = window.confirm("Are you sure you'd like to skip?");

        // if yes, leave fight
        if (confirmSkip) {
            window.alert(playerName + " has chosen to skip this fight. Goodbye!");
            // subtract money from playerMoney
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
};

for(var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
}
// fight()
