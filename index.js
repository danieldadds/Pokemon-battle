// dom assinging

const btnOne = document.getElementById("text-one");

const displayName = document.getElementById("pokemon-name");
const displayHp = document.getElementById("pokemon-hp");
const displayLevel = document.getElementById("pokemon-level");
// pokemon construction

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
const pokeCharmander = new Pokemon("2", null, "Charmander", 1, 100, "Fire", {
  actionEmber,
});

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
  btnOne.innerText = moveEmber.moveName;
}

function selectPokemon(pokemon) {
  displayName.innerText = pokemon.pokeName;
  displayHp.innerText = pokemon.pokeHp;
  displayLevel.innerText = pokemon.pokeLevel;
}

function levelUp(pokemon) {
  return (pokemon.pokeLevel = pokemon.pokeLevel + 1);
}
