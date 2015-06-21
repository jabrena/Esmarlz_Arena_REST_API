/*jslint node: true*/
/*global describe: true, it: true*/
"use strict";

var chai = require("chai"),
    expect = require("chai").expect;



describe.only("Meta test", function () {

    it("paja 01", function () {
        var number = 1e10;
        expect(number + 1.1).equal(number);
    });
});