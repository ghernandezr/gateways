"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("./model");
const mongoose = require("mongoose");
const Device = mongoose.model("Device", model_1.DeviceSchema);
class DeviceController {
    listDevices(req, res) {
        Device.find({}, function (err, device) {
            if (err) {
                res.send(err);
            }
            res.json(device);
        });
    }
    createDevice(req, res) {
        let device = new Device(req.body);
        device.save(function (err, device) {
            if (err) {
                res.send(err);
            }
            res.json(device);
        });
    }
    readDevice(req, res) {
        Device.findById(req.params.deviceId, function (err, device) {
            if (err) {
                res.send(err);
            }
            res.json(device);
        });
    }
    updateDevice(req, res) {
        Device.findOneAndUpdate({ _id: req.params.deviceId }, req.body, { new: true }, function (err, device) {
            if (err) {
                res.send(err);
            }
            res.json(device);
        });
    }
    deleteDevice(req, res) {
        Device.remove({
            _id: req.params.deviceId,
        }, function (err, device) {
            if (err) {
                res.send(err);
            }
            res.json({ message: "Device successfully deleted" });
        });
    }
}
exports.DeviceController = DeviceController;
//# sourceMappingURL=controller.js.map