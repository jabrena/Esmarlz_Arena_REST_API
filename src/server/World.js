/*jslint node: true*/
/*global Promise: true*/
"use strict";

var model = require('./Worlds');

function Player(robot, x, y, heading) {
    if (!(this instanceof Player)) {
        throw new Error("This is a constructor");
    }

    this.robot = robot;
    this.x = x;
    this.y = y;
    this.heading = heading;
}

function World(robot1, robot2) {
    if (!(this instanceof World)) {
        throw new Error("This is a constructor");
    }
    this.players = [new Player(robot1, 500, 0, 3 / 4 * Math.PI), new Player(robot1, -500, 0, 1 / 4 * Math.PI)];
}


World.prototype.update = function (delta) {

};




/*

Methods:

getWorlds()
exist()
getCellInfo(x,y)
update(x,y,worldObject)

worldObject (FREE | ROBOT | OBSTACLE)

*/