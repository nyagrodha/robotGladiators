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

// Wrap the game in a startGame() function

// function to start a new game
var startGame = function() {
    for (var i = 0; i < enemyNames.length; i++) {
      if (playerHealth > 0) {
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
  
        var pickedEnemyName = enemyNames[i];
  
        enemyHealth = 50;
  
        fight(pickedEnemyName);
      }
      else {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
      }
    }
  };
        
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
                console.log("playerMoney", playerMoney);
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
// endGame() function
    } else {
        window.alert(playerName + ' still has ' + playerHealth + '% power remaining.');
    }

    


// var fight = function(enemyName) {
//     // repeat and execute so long as enemy robot has power remaining
//     while(enemyHealth > 0 && playerHealth > 0) {

//     var promptFight = window.prompt("Would you like to FIGHT or to SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
//     // if player chooses to fight, fight
    
//     if (promptFight === "fight" || promptFight === "FIGHT") {
//     // Subtract the value of 'playerAttack' from the value of enemyHealth
//     enemyHealth = enemyHealth - playerAttack;
    
//     // Log a resulting message to the console so we know it worked
//     console.log(
//         playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + "% power remaining."
//         );
        
//     //Check enemy health
//     if (enemyHealth <= 0) {
//         window.alert(playerName + " has decimated " + enemyName + "!");
//         break;
//     }
//     else {
//         window.alert(enemyName + " still has " + enemyHealth + "% power remaining.");
//     }
//     //Subtract the value of enemyAttack from the value of playerHealth and use that result to update the value in the 'playerHealth' variable.
//     playerHealth = playerHealth - enemyAttack;
//     // Log a resulting message to the console so we know that it worked
//     console.log(
//         enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + "% power remaining."
//     )
//     // Check player's health
//     if (playerHealth <= 0) {
//         window.alert(enemyName + " has destroyed " + playerName);
//         break;
//     } if (promptFight === "skip" || promptFight === "SKIP") {
//         var confirmSkip = window.confirm("Are you sure you'd like to quit?");
//         // if yes (true), leave fight
//         var confirmSkip = window.confirm("Are you sure you'd like to skip?");
//         // if yes, leave fight
//         if (confirmSkip) {
//             window.alert(playerName + " has chosen to skip this fight. Goodbye!");
//             // subtract money from playerMoney
//             playerMoney = playerMoney - 10;
//             console.log("playerMoney", playerMoney);
//             break;
//         } else {
//                 window.alert("You need to pick a valid option. Try again!");
//     }
//     } else {
//         window.alert(playerName + " still has " + playerHealth + "% power remaining.");
//     }
//         // if no, ask question again by running fight() again
// } else {
//             fight();
//         }
//         window.alert(playerName + " has chosen to skip the fight!");
var startGame = function() {
for(var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
        window.alert("Welcome to Robot Gladiators! Round " + "(i + 1));
        var pickedEnemyName = enemyNames[i];
        enemyHealth = 50;
        fight(pickedEnemyName);
    } else {
        window.alert("You have lost " + playerName + " in battle. Game over!");
        break;
    }
}
};

// fight()
