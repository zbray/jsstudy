function getPokemon(type) {
  let pokemon;
  switch (type) {
    case 'Water':
      pokemon = 'Squirtle';
      break;
    case 'Fire':
      pokemon = 'Charmander';
      break;
    case 'Plant':
      pokemon = 'Bulbasur';
      break;
    case 'Electric':
      pokemon = 'Pikachu';
      break;
  }

  console.log(getPokemon('Fire')); // Result: Your pokemon is Charmander

  // By refactoring our function and using an Object, we can get rid of the switch statement:
}
function getPokemon2(type) {
  const pokemon = {
    Water: 'Squirtle',
    Fire: 'Charmander',
    Plant: 'Bulbasaur',
    Electric: 'Pikachu',
  };

  return 'Your pokemon is ${pokemon[type]}';
}

console.log(getPokemon2('Fire'));

// Result: Your pokemon is Charmander
// Same result, cleaner code :)
