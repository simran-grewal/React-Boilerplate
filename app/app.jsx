var React = require('react');
var ReactDOM = require('react-dom');

var obj = {
  name: 'simran'
};

var newObj = {
  ...obj,
  age: '22'
};

console.log(newObj);

ReactDOM.render(
  <h1>boilerplate app!!</h1>,
  document.getElementById('app')
);
