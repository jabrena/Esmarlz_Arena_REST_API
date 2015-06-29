/*jslint node: true*/
/*global Promise: true*/
"use strict";

var DELTA = 0.01;

function update(game) {
    if (game.status === 1) {
        game.world.update(DELTA);
        game.time += DELTA;
        setTimeout(function () {
            update(game);
        }, 0);
    }
}

function Game(world) {
    if (!(this instanceof Game)) {
        throw new Error("This is a constructor");
    }
    this.world = world;
    this.status = 0;
    this.time = 0;
}

Game.prototype.start = function () {
    this.status = 1;
    update(this);
};

Game.prototype.pause = function () {
    if (this.status !== 2 && this.status !== 1) {
        throw new TypeError("Invalid game status");
    }
    if (this.status === 1) {
        this.status = 2;
    } else {
        this.status = 1;
        update(this);
    }
};

Game.prototype.end = function () {
    this.status = 0;
};

module.exports = Game;

/*
Methods:

start(team[],world,conf) The game allow multiplayer
stop()
pause()
save()
action()

Is the robot objet the same from the list? I am not sure
The game know when a user finish his turn.
*/