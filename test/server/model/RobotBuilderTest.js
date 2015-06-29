/*jslint node: true*/
/*global describe: true, it: true*/
"use strict";

var chai = require("chai"),
    expect = require("chai").expect,
    source = require("../helper").source;

describe("Robot builder", function () {
    var RobotBuilder = source("model/Robot"),
        ChassisCatalog = source("model/ChassisCatalog"),
        WeaponCatalog = source("model/WeaponCatalog"),
        DEFAULT_WEAPON = "plasma-rifle",
        DEFAULT_CHASSIS = "humanoid";

    it("should create a default robot", function () {
        var builder = new RobotBuilder(),
            robot = builder.build();
        expect(robot.name).equal("unnamed-robot-" + RobotBuilder.totalBuilds);
        expect(robot.chassis).deep.equal(ChassisCatalog[DEFAULT_CHASSIS]);
        expect(robot.weapons).deep.equal([WeaponCatalog[DEFAULT_WEAPON]]);
    });
});