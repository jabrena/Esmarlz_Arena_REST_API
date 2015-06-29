/*jslint node: true*/
/*global describe: true, it: true*/
"use strict";

var chai = require("chai"),
    expect = require("chai").expect,
    source = require("../helper").source;


describe.only("Game Model", function () {
    var RobotBuilder = source("model/Robot"),
        World = source("model/World"),
        Game = source("model/Game");

    this.timeout(15000);

    it("should update ....", function (done) {
        var builder = new RobotBuilder(),
            robot1 = builder.build(),
            robot2 = builder.build(),
            world = new World(robot1, robot2),
            game = new Game(world);

        robot1.setThrust(1000);
        game.start();
        setTimeout(function () {
            game.end();
            console.log(game.time);
            console.log(game.world.players[0].pos.x);
            done();
        }, 10000);
    });
});