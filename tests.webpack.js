require('babel-polyfill');

//setup:
var chai = require('chai');
var chaiEnzyme = require('chai-enzyme');

chai.use(chaiEnzyme());

//look for spec files

var context = require.context('./src', true, /\.spec\.js$/);
context.keys().forEach(context);
