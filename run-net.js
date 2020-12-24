const fs = require('fs');
let brain = require('brain.js');
let net = new brain.recurrent.LSTM();

let model = JSON.parse(fs.readFileSync('trained-net.json', 'utf-8'))
net.fromJSON(model);

console.log(net.run('волк'));