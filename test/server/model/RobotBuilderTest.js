/*jslint node: true*/
/*global describe: true, it: true*/
"use strict";

var chai = require("chai"),
    expect = require("chai").expect;

chai.use(require("chai-as-promised"));

describe("Robot builder", function () {
    var RobotBuilder = require("../../../src/server/model/Robot"),
        ChassisCatalog = require("../../../src/server/model/ChassisCatalog"),
        WeaponCatalog = require("../../../src/server/model/WeaponCatalog"),
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