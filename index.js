// dom assinging game screen

const displayName = document.getElementById("pokemon-name");
const displayHp = document.getElementById("pokemon-hp");
const displayLevel = document.getElementById("pokemon-level");
const displayPlayerPokemon = document.getElementById("player-pokemon");
const displayOpName = document.getElementById("op-name");
const displayOpHp = document.getElementById("op-hp");
const displayOpLevel = document.getElementById("op-level");
const displayOpPlayerPokemon = document.getElementById("op-pokemon");

///TEST BUTTONS

const testOne = document.getElementById("test-one");
const testTwo = document.getElementById("test-two");
const testThree = document.getElementById("test-three");

// dom assinging menu

const optionOne = document.getElementById("text-one");
// pokemon construction

// move contructor

function Move(name, power, type, action) {
  this.moveName = name;
  this.movePower = power;
  this.moveType = type;
  this.moveAction = action;
}

//move generation
const moveEmber = new Move("Ember", 20, "Fire", "action");

/// player controls

// move functions

function actionEmber() {
  console.log("ember activated");
}

function Pokemon(id, img, name, level, hp, type, moves) {
  this.pokeId = id;
  this.pokeImg = img;
  this.pokeName = name;
  this.pokeLevel = level;
  this.pokeHp = hp;
  this.pokeType = type;
  this.pokeMoves = moves;
}

// pokemon generation
const pokeCharmander = new Pokemon(
  "2",
  "url('/player-pokemon/charmander.gif')",
  "Charmander",
  1,
  100,
  "Fire",
  {
    actionEmber,
  }
);

const pokeBulbasaur = new Pokemon(
  "2",
  "url('/player-pokemon/bulbasuar.gif')",
  "Bulbasuar",
  1,
  100,
  "Tackle",
  {
    // actionTackle,
  }
);

/// set up opponants

function opPokemon(id, img, name, level, hp, type, moves) {
  this.pokeId = id;
  this.pokeImg = img;
  this.pokeName = name;
  this.pokeLevel = level;
  this.pokeHp = hp;
  this.pokeType = type;
  this.pokeMoves = moves;
}

///opponants generation

const opSnorlax = new Pokemon(
  "2",
  "url('/op-pokemon/snorlax.gif",
  "Snorlax",
  1,
  100,
  "Normal",
  {
    // actionEmber,
  }
);

// core functions

function selectPokemon(pokemon) {
  // assigning on game screen
  displayName.innerText = pokemon.pokeName;
  displayHp.innerText = pokemon.pokeHp;
  displayLevel.innerText = pokemon.pokeLevel;
  displayPlayerPokemon.style.backgroundImage = pokemon.pokeImg;
}

function selectOp(pokemon) {
  // assigning on game screen
  displayOpName.innerText = pokemon.pokeName;
  displayOpHp.innerText = pokemon.pokeHp;
  displayOpLevel.innerText = pokemon.pokeLevel;
  displayOpPlayerPokemon.style.backgroundImage = pokemon.pokeImg;
}

/// player inventory

let playerParty = [pokeBulbasaur, pokeCharmander];
let currentPokemon;
let currentOp = opSnorlax;

// future features

function levelUp(pokemon) {
  return (pokemon.pokeLevel = pokemon.pokeLevel + 1);
}

///TEST FEATURES

testOne.innerText = playerParty[0].pokeName;
testTwo.innerText = playerParty[1].pokeName;

testOne.addEventListener("click", function () {
  selectPokemon(playerParty[0]);
  currentPokemon = playerParty[0];
  console.log(currentPokemon);
});

testTwo.addEventListener("click", function () {
  selectPokemon(playerParty[1]);
  currentPokemon = playerParty[1];
  console.log(currentPokemon);
});

testThree.innerText = testThree.addEventListener("click", function () {
  let tempOpHp = opSnorlax.pokeHp;
  tempOpHp - 20;
  console.log(tempOpHp);
});
