import { randomArray } from './helpers.js'

let random = [...Array(100)].map(() => Math.floor(Math.random() * 100));
random.sort(function(a, b){return b - a});
console.log(random)