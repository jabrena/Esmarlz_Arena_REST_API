/*jslint node: true*/
"use strict";


module.exports = {
    source: function (file) {
        return require('../../src/server/' + file);
    }

};