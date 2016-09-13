var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');


//load foundation

$(document).foundation();

//load css
require('style!css!sass!applicationStyles');

// ReactDOM.render(
//
// 	<p>Boilerplate3 project</p>,
// 	document.getElementById('app')
// );

//require('./redux-todo-example.jsx');
require('./redux-example.jsx');
