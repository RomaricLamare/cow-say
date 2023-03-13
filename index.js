const userInfo = require('./information');

const cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Hello I am ${userInfo.myName} and I come from ${userInfo.campus}`,
    e : "oO",
    T : "U "
}));