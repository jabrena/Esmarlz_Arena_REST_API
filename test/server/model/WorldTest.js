/*jslint node: true*/
/*global describe: true, it: true*/
"use strict";

var chai = require("chai"),
    expect = require("chai").expect,
    source = require("../helper").source;


describe("World Model", function () {
    var RobotBuilder = source("model/Robot"),
        World = source("model/World");

    it("should update ....", function () {
        var i, l, s,
            builder = new RobotBuilder(),
            robot1 = builder.build(),
            robot2 = builder.build(),
            world = new World(robot1, robot2),
            DELTA = 0.01;

        world.update(DELTA);
        expect(world.players[0].pos).deep.equal({x: 500, y: 0});
        expect(world.players[1].pos).deep.equal({x: -500, y: 0});

        robot1.setThrust(1000);

        for (i = 0, l = (1 / DELTA) * 20; i < l; i += 1) {
            world.update(DELTA);
        }
        //s = s0 + v0t + 0.5at^2
        s = 500 + 0.5 * 400;
        expect(world.players[0].pos.x).eql(s);

    });
});