#!/usr/bin/env node

import minimist  from 'minimist';
import { rpsPlay } from '../lib/rpsls.js';

var args = minimist(process.argv.slice(2))

if( args.h || args.help) {
help();
process.exit(0);
}

if( args.r || args.rules){
rules();
process.exit(0);
}

const move = args._[0]
try{
    console.log(JSON.stringify(rpsPlay(move)))
}catch (e){
    help();
    rules();
    console.log(`Invalid input: 
    -h, --help      display this help message and exit
    -r, --rules     display the rules and exit`);
    process.exit(1);
}

function help(){
  console.log(`Usage: node-rps [SHOT]
  Play Rock Paper Scissors (RPS)
  
    -h, --help      display this help message and exit
    -r, --rules     display the rules and exit
  
  Examples:
    node-rps        Return JSON with single player RPS result.
                    e.g. {"player":"rock"}
    node-rps rock   Return JSON with results for RPS played against a simulated opponent.
                    e.g {"player":"rock","opponent":"scissors","result":"win"}`);
}

function rules(){
  console.log(`Rules for Rock Paper Scissors:

  - Scissors CUTS Paper
  - Paper COVERS Rock
  - Rock CRUSHES Scissors`);
}