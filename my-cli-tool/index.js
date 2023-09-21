#!/usr/bin/env node

const inquirer = require('inquirer');

const print5PokemonMoves = async (pokemonName) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
  const pokemon = await response.json();
  const moves = pokemon.moves.slice(0, 5).map(m => m.move.name);
  console.log(moves);
}

const prompt = inquirer.createPromptModule();
prompt([
  {
    type: 'input',
    name: 'pokemon',
    message: 'What is your favorite pokemon? to get his top 5 moves'
  }
]).then(answers => {
  print5PokemonMoves(answers.pokemon);
})
