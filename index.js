let fs = require('fs');
let brain = require('brain.js');

let net = new brain.recurrent.LSTM();

let text = fs.readFileSync('quotes', 'utf-8');
let arr = text.split('\n');
arr = arr.slice(0, 4);
// console.log(arr);

let trainedNet = JSON.parse(fs.readFileSync('trainedNet.json', 'utf-8'));

net.fromJSON(trainedNet);



// net.train(arr, {
//   // Defaults values --> expected validation
//   iterations: 300, // the maximum times to iterate the training data --> number greater than 0
//   errorThresh: 0.005, // the acceptable error percentage from training data --> number between 0 and 1
//   log: true, // true to use console.log, when a function is supplied it is used --> Either true or a function
//   logPeriod: 10, // iterations between logging out --> number greater than 0
//   learningRate: 0.3, // scales with delta to effect training rate --> number between 0 and 1
//   momentum: 0.1, // scales with next layer's change value --> number between 0 and 1
//   callback: null, // a periodic call back that can be triggered while training --> null or function
//   callbackPeriod: 10, // the number of iterations through the training data between callback calls --> number greater than 0
//   timeout: Infinity, // the max number of milliseconds to train for --> number greater than 0
// });

// fs.writeFileSync('trainedNet.json', JSON.stringify(net.toJSON()));
console.log(net.run('я'));