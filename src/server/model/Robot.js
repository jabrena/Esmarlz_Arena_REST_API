/*jslint node: true*/

"use strict";

var WEAPONS = require('./WeaponCatalog'),
    CHASSIES = require('./ChassisCatalog');

function Robot(name, chassis, weapons) {
    if (!(this instanceof Robot)) {
        throw new Error("This is a constructor");
    }
    this.name = name;
    this.chassis = chassis;
    this.weapons = weapons;
    this.speed = 0;
}

Robot.prototype.move = function (power) {
    this.power = power;
};

Robot.prototype.turn = function (radians) {
    this.radians = radians;
};

Robot.prototype.fire = function (radians, weaponIndex) {

};



function RobotBuilder() {
    if (!(this instanceof RobotBuilder)) {
        throw new Error("This is a constructor");
    }

    RobotBuilder.totalBuilds += 1;
    this.weapons = [];
}

RobotBuilder.totalBuilds = 0;

RobotBuilder.prototype.setChassisType = function (chassisId) {
    var chassis = CHASSIES[chassisId];
    if (!chassis) {
        throw new TypeError("Chassis Id not found");
    }
    this.chassis = chassis;
};

RobotBuilder.prototype.setName = function (name) {
    this.name = name;
};

RobotBuilder.prototype.addWeapon = function (weaponId) {
    var weapon = WEAPONS[weaponId];
    if (!weapon) {
        throw new TypeError("Weapon Id not found");
    }
    this.weapons.push(weapon);
};

RobotBuilder.prototype.build = function () {
    if (!this.name) {
        this.name = "unnamed-robot-" + RobotBuilder.totalBuilds;
    }
    if (!this.chassis) {
        this.setChassisType("humanoid");
    }
    if (!this.weapons.length) {
        this.addWeapon("plasma-rifle");
    }

    return new Robot(this.name, this.chassis, this.weapons); // A new robot.
};


module.exports = RobotBuilder;

/*

Properties

name
team
movements
fire
lifes

*/