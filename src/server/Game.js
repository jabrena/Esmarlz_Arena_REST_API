/*jslint node: true*/
/*global Promise: true*/
"use strict";

var model = require('./Games');

function Game() {
    if (!(this instanceof Game)) {
        throw new Error("This is a constructor");
    }
}

/*
Methods:

start(team[],world,conf) The game allow multiplayer
stop()
pause()
isMyTurn()
save()
action()

Is the robot objet the same from the list? I am not sure
The game know when a user finish his turn.
*/