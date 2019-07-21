//start page
$(document).ready(function() {
//list of characters as objects - to be able to call any time
var characters= {
    "The Kids": {
        name: "The Kids",
        health: 500000,
        attack: 15000,
        defenseAttack: 15000,
        image:"assets/images/the-gang-2.jpg",
    },
    "Hopper": {
        name: "Hopper",
        health: 100000,
        attack: 25000,
        defenseAttack: 25000,
        image:"assets/images/hopper.png"
    },
    "Demgorgon": {
        name:"Demogorgon",
        health: 600000,
        attack: 15000,
        defenseAttack: 15000,
        image:"assets/images/demogorgon.jpg"
    },
    "Mind Flayer": {
        name:"mind-flayer",
        health: 700000,
        attack: 30000,
        defenseAttack: 30000,
        image:"assets/images/mind-flayer.png"
    },
};
console.log(characters);
//functions to use throughtout the game
//functio to call characters as items
//function to call a specific area that we want based of the divs
var renderNow = function(character, selectedArea)
var callCharacter = function(charObj, selectedArea){
    if (selectedArea === "characterArea"){
    //way to say push or create objects into the specific div space
            }
        }
    }
}

//now more local task
//clicking ability using on click function turing the photos into buttons

//selecting one character and moving the others to enemy section section-use this to be able to be what the user selects- if statement 

//select an enemy and put in defender section- if statement

//attacking button - user attacks defender and then check if health is zero, if defender is not zero show current value, if zero then remove enemy and increase score
//if enemy chosen has health then go through arthmtic for attack

//function restart game
});
