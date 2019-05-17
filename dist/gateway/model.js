"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const model_1 = require("../device/model");
let Schema = mongoose.Schema;
exports.GatewaySchema = new Schema({
    serialNumber: {
        type: String,
        required: "Serial number is required",
        unique: true,
    },
    name: {
        type: String,
        required: "Name is required",
    },
    ipV4Address: {
        type: String,
        required: "Ip Address is required",
        match: "^(?:(?:^|.)(?:2(?:5[0-5]|[0-4]d)|1?d?d)){4}$",
    },
    devices: {
        type: [model_1.DeviceSchema],
        default: undefined,
        max: 10,
    },
});
//# sourceMappingURL=model.js.map