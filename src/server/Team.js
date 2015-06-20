/*jslint node: true*/
/*global Promise: true*/
"use strict";

var model = require('./TeamModel');

function Team() {
    if (!(this instanceof Team)) {
        throw new Error("This is a constructor");
    }
}

Team.prototype.exist = function (team) {

    return Promise.resolve(true);
};

Team.prototype.getRobots = function (team) {

    var robots = ["demo1", "demo2", "demo3"];

    return Promise.resolve(robots);
};

module.exports = Team;