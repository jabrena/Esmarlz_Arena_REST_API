/*jslint node: true*/
/*global Promise: true*/
"use strict";

var model = require('./UserTeams');

function UserTeams() {
    if (!(this instanceof UserTeams)) {
        throw new Error("This is a constructor");
    }
}

UserTeams.prototype.length = function (user) {
    if (model[user].length) {
        return Promise.resolve(model[user].length);
    }

    return Promise.resolve(0);
};

UserTeams.prototype.exist = function (user,team) {

    return Promise.resolve(true);
};

UserTeams.prototype.getTeams = function (user) {

    var teams = ["demo1", "demo2", "demo3"];

    return Promise.resolve(teams);
};

module.exports = UserTeams;