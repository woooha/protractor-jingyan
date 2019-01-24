"use strict";
exports.__esModule = true;
var Rx_1 = require("rxjs/Rx");
var SerialPort = require("serialport");
var Inclination = (function () {
    function Inclination() {
    }
    return Inclination;
}());
exports.Inclination = Inclination;
var Protractor = (function () {
    function Protractor(path) {
        this.path = path;
        this.parser = new SerialPort.parsers.ByteLength({ length: 12 });
        this.serialPort = new SerialPort(path, { baudRate: 9600 });
        this.serialPort.pipe(this.parser);
        this.result = Rx_1.Observable.fromEvent(this.parser, 'data').map(function (data) {
            var str = data.toString();
            var x = parseInt(str.slice(1, 6), 10) / 100;
            var y = parseInt(str.slice(7), 10) / 100;
            return { x: x, y: y };
        });
    }
    return Protractor;
}());
exports.Protractor = Protractor;
//# sourceMappingURL=index.js.map