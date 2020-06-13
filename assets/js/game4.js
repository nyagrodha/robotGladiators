var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
console.log("Your robot, " + playerName + ", packs an attack value of " + playerAttack + ", and has " + playerHealth + "% power remaining.");

var enemyNames = ["Roborto🤖", "Amy🤖Android", "Robo🤖Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
  // repeat and execute as long as the enemy robot is alive
  while(enemyHealth > 0) {
    //window.alert("Welcome to Robot Gladiators!");
    // ask the user if they wish to fight or to skip the fight.
    var promptFight = window.prompt("Would you like to FIGHT or to SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    console.log(promptFight);
    //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    // if player chooses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
      enemyHealth = enemyHealth - playerAttack;
      // Log a resulting message to the console so we know that it worked.
      console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + "% power remaining.");
      // check enemy's health
      if (enemyHealth <= 0) {
        window.alert(playerName + " has destroyed " + enemyName);
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
      } else {
          window.alert(playerName + " still has " + playerHealth + "% power remaining.");
        }
      } else if (promptFight === "skip" || promptFight === "SKIP") {
        //confirm user wishes to skip
        var confirmSkip = window.confirm("Are you sure you'd like to skip?")

        // if yes (true), leave the fight
        if (confirmSkip) {
          window.alert(playerName + " has decided to skip this fight. Goodbye!");
          playerMoney = playerMoney - 2;
        } else {
          fight();
        }
        window.alert(playerName + " has chosen to skip the fight!");
      } else {
        window.alert("You need to pick a valid option. Try again please.");
      }
    }
  }

for (var i = 0; i < enemyNames.length; i++) {
  var pickedEnemyName = enemyNames[i];
  enemyHealth = 50;
  // call the fight function with enemy robot
  fight(pickedEnemyName);
}