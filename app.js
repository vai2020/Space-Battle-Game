/*Pseudo code:
Title of game: Space_Battle: USS vs Aliens 

Rule:  USS initiates first attack.  Only allow to attack Aliens in     order;                 
       Alien attacks USS one at a time depending on outcome
      
Scenario: After USS attack => 2 outcomes: 
            1) If Alien survives, it attacks USS
            2) If USS survives, it attacks the next Alien

Your 2 options after destroying an Alien:
            1) Retreat = Game Over;
            2) Attack the next Alien in order

Winning: if you destroy all of the Aliens.
Losing:  if you are destroyed by the Aliens.        
        
Given:  Ship Properties ***hull** is the same as hitpoints. 
        If hull <= 0, the ship is destroyed. 
        firepower = the amount of damage done to the hull of the target with a successful hit. 
        accuracy = the chance between 0 and 1 that the ship will hit its target. 
        Every time the ship will attack, calculate the chance that the damage will hit the opposing ship using `Math.random()`, meaning if the ship's accuracy is `0.8` 
        If the number generated from `Math.random()` <= `0.8` then the attack will be successful. 
        If the value is > `0.8` then the attack has missed. 
        Adjust the accuracy based on the specs for each ship (Your spaceship, 
            The USS Schwarzenegger should have the following properties: 
            1) hull - `20` 
            2) firepower - `5` 
            3) accuracy - `.7` 
        
            The alien ships should each have the following _ranged_ properties determined randomly: 
            1) hull - between `3` and `6` 
            2) firepower - between `2` and `4` 
            3) accuracy - between `.6` and `.8` 
        
      You could be battling six alien ships each with unique values. 
      Example use of **accuracy** to determine a hit: 
      ```javascript if (Math.random() < alien[0].accuracy) { console.log('You have been hit!'); } ```*/


        class Alien {
            constructor() {
            this.hull = 6; // add random math method between 3 - 6;
            this.firepower = 3; // add random math method between 2 - 4;
            this.accuracy = 0.7; // add a random math method betweeb 0.6 - 0.8
            }          
            }
            
            class usShip {
            constructor() {
            this.hull = 20;
            this.firepower = 5; 
            this.accuracy = 0.7;
            }
            }
            const alien1 = new Alien();
            const alien2 = new Alien();
            const alien3 = new Alien();
            const alien4 = new Alien();
            const alien5 = new Alien();
            const alien6 = new Alien();
            const player1 = new usShip();
            console.log(player1.hull)
            console.log(alien1.hull)
            
            let player1Score = 0;
            
            const startGame() {
            // conditional here
            // first player accuracy <= 0.8 // IF FALSE =======> it is alien1 turn 
            // and if it destroys player1 then update hull -1
            // destroy alien1 // how to delete class
            // update player1score = 1;
            // continue with the game
            // update player1score = 6
            // user wins!
            }
            function Player() {
            
            }

            class player {
                  constructor() {
                      this.attack:
                  }
                  attack (){
                      let attackMeter = Math.random().toFixed(2)
                      console.log(attackMeter)
                      }
                      }
          
                      player.attack()
          
          
          //if we survive we attack ship again.  If not, aliens attack//
          // user let attacks = 0 or retreat (or exit game)
                function startGame() {
                let answer = window.prompt("Make your first move"); alert("your");
                let userInput =  (resp) => {
                      console.log("What's your move?"
                      if(resp === "attack") {
                            console.log(Math.random().toFixed(2));
          
                      }
                }
                }
                startGame();
          
                  function accuracy( ) {
                      use Math.random()
                      make the condtion of Math.random to be between 1 and 0 and 0.1
                      console.log('Accuracy is $(Math.random)');
                  }
          
                  function accuracy(.7);
                  console.log($  {Math.random()});
          
                  function USship() {
                        Math.random();
                        this function attack and reduces or increases the number in the alienHull;
                        calculate
          
                  function      
                  }
          
                  function USShip () {
                        console.log(Math.random().toFixed(2)) <= 0.8 -0=
                  }
          
        


/*Get Random Whole Number Within Range
You can get a random integer (whole number) within a range by specifying the minimum and maximum numbers for the range. (The minimum and maximum values will be included as part of the possible range to randomly select from.)*/



  let GameManager = {
              setGameStart: function() {
                  this.resetPlayer();
                  this.setPreflight();
              },
        resetPlayer: function() {

        },
         setPreFlight: function() {

         }
            }            

            