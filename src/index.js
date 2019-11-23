// var _ = require('lodash');
import _ from 'lodash'
import {area,circum} from './js/circle'
import cube1 from './js/cube'

import './style.css'
import './hello.scss';
// import {area} from "./js/circle";

function component() {
	let element = document.createElement('div');

	// Lodash, currently included via a script, is required for this line to work
	element.innerHTML = _.join(['Hello', 'webpack'], ' ');

	return element;
}
console.log(area(5),circum(5))
console.log(cube1.volume(5))
document.body.appendChild(component());