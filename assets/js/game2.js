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

var fight = function(enemyName) {
    while (playerHealth > 0 && enemyHealth > 0) {
        // ask user if they'd like to fight or to run
        var promptFight = window.prompt('Would you like to FIGHT or to SKIP this battle?');
        
        // if user picks 'skip,' then confirm and then stop the loop
        if (promptFight === 'skip' || promptFight === "SKIP") {
            // cinfirm user wishes to skip
            var confirmSkip = window.confirm("Are you sure you want to leave the battle?");

            // if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + ' has decided to skip this fight. Goodbye!');
                // subtract money from playerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney");
                break;
            }
        }
    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + '% power remaining.');

    // check enemy's health

    if (enemyHealth <= 0) {
         window.alert(playerName + " has destroyed " + enemyName);

         // award player money for winning
         playerMoney = playerMoney + 20;

         // leave while() loop since enemy is dead
        break;
    } else {
        window.alert(enemyName + ' still has ' + enemyHealth + '% power remaining.');
    }
    // remove player's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + '% power remaining.');

    // check player's health
    if (playerHealth <= 0) {
        window.alert(playerName + ' has been decimated by ' + enemyName);
        // leave while loop if player's dead
        break;
    } else {
        window.alert(playerName + ' still has ' + playerHealth + '% power remaining.');
    }
    }
} 
    
fight();