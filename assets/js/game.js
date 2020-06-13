
var playerName = window.prompt("What's your 🤖robot's name?");
console.log(playerName);
var playerHealth = 100;
var playerAttack = 10;
// Log multiple values
console.log(playerName, playerName, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

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