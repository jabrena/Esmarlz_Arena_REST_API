/*jslint node: true*/
/*global describe: true, it: true*/
"use strict";

var chai = require("chai"),
    expect = require("chai").expect;

chai.use(require("chai-as-promised"));

describe("User Service", function () {
    var service = new (require("../../src/server/UserService"))();

    describe("UserService.prototype.login(user, pass)", function () {
        it("should return true for a valid user", function () {
            return expect(service.login("breña", "banana")).become(true);
        });
        it("should return false if the user is not on the system", function () {
            return expect(service.login("tito", "pipas")).become(false);
        });
    });

});

