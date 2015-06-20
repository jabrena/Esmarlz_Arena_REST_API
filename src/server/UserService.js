/*jslint node: true*/
/*global Promise: true*/
"use strict";

var model = require('./UserModel');

function UserService() {
    if (!(this instanceof UserService)) {
        throw new Error("This is a constructor");
    }
}

UserService.prototype.login = function (user, pass) {
    if (model[user] && model[user].pass === pass) {
        return Promise.resolve(true);
    }

    return Promise.resolve(false);
};

//TODO: Pending discussion
UserService.prototype.logout = function () {
   return Promise.resolve(true);
};

module.exports = UserService;
