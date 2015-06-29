/*jslint node: true*/
/*global Promise: true*/
"use strict";

function multiply2DVectorScalar(v, s) {
    return { x: v.x * s, y: v.y * s };
}

function add2DVectors(v1, v2) {
    return { x: v1.x + v2.x, y: v1.y + v2.y };
}


function updatePlayer(player, delta) {
    //f = ma => a = f / m
    var acc = multiply2DVectorScalar(player.heading, player.robot.power / player.robot.mass);
    // v = v0 * at
    player.speed = add2DVectors(player.speed, multiply2DVectorScalar(acc, delta));
    // Constant speed in delta.
    // s = s0 * vt
    player.pos = add2DVectors(player.pos, multiply2DVectorScalar(player.speed, delta));
}

function Player(robot, pos, heading) {
    if (!(this instanceof Player)) {
        throw new Error("This is a constructor");
    }
    this.robot = robot;
    this.speed = { x: 0, y: 0 };
    this.pos = pos;
    this.heading = heading;
}

function World(robot1, robot2) {
    if (!(this instanceof World)) {
        throw new Error("This is a constructor");
    }
    this.players = [
        new Player(robot1, { x: 500, y: 0 }, {x: -1, y: 0}),
        new Player(robot2, { x: -500, y: 0 }, {x: 1, y: 0})
    ];
}


World.prototype.update = function (delta) {
    var i, l, players = this.players;
    for (i = 0, l = players.length; i < l; i += 1) {
        updatePlayer(players[i], delta);
        //console.dir(players[i]);
    }
};

module.exports = World;

/*

Methods:

getWorlds()
exist()
getCellInfo(x,y)
update(x,y,worldObject)

worldObject (FREE | ROBOT | OBSTACLE)

*/