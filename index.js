// dom assinging game screen

const displayName = document.getElementById("pokemon-name");
const displayHp = document.getElementById("pokemon-hp");
const displayLevel = document.getElementById("pokemon-level");
const displayPlayerPokemon = document.getElementById("player-pokemon");

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

// core functions

function selectPokemon(pokemon) {
  // assigning on game screen
  displayName.innerText = pokemon.pokeName;
  displayHp.innerText = pokemon.pokeHp;
  displayLevel.innerText = pokemon.pokeLevel;
  displayPlayerPokemon.style.backgroundImage = pokemon.pokeImg;

  // assigning on menu
}

// future features

function levelUp(pokemon) {
  return (pokemon.pokeLevel = pokemon.pokeLevel + 1);
}
