#!/usr/bin/env node

const yargs = require('yargs');
const {argv} = yargs(process.argv)


const print5PokemonMoves = async (pokemonName) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
  const pokemon = await response.json();
  const moves = pokemon.moves.slice(0, 5).map(m => m.move.name);
  console.log(moves);
}

print5PokemonMoves(argv.pokemon);