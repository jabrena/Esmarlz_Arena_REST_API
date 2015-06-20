/*jslint node: true*/
/*global Promise: true*/
"use strict";

var model = require('./Robots');

function Robot() {
    if (!(this instanceof Robot)) {
        throw new Error("This is a constructor");
    }
}

/*

Properties

name
team
movements
fire
lifes

*/