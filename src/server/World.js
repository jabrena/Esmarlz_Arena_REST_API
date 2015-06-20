/*jslint node: true*/
/*global Promise: true*/
"use strict";

var model = require('./Worlds');

function World() {
    if (!(this instanceof World)) {
        throw new Error("This is a constructor");
    }
}

/*

Methods:

getWorlds()
exist()
getCellInfo(x,y)
update(x,y,worldObject)

worldObject (FREE | ROBOT | OBSTACLE)

*/