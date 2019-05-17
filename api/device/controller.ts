import { DeviceSchema } from "./model";
import * as mongoose from "mongoose";

const Device = mongoose.model("Device", DeviceSchema);

export class DeviceController {
  public listDevices(req, res) {
    Device.find({}, function(err, device) {
      if (err) {
        res.send(err);
      }
      res.json(device);
    });
  }

  public createDevice(req, res) {
    let device = new Device(req.body);
    device.save(function(err, device) {
      if (err) {
        res.send(err);
      }
      res.json(device);
    });
  }

  public readDevice(req, res) {
    Device.findById(req.params.deviceId, function(err, device) {
      if (err) {
        res.send(err);
      }
      res.json(device);
    });
  }

  public updateDevice(req, res) {
    Device.findOneAndUpdate(
      { _id: req.params.deviceId },
      req.body,
      { new: true },
      function(err, device) {
        if (err) {
          res.send(err);
        }
        res.json(device);
      },
    );
  }

  public deleteDevice(req, res) {
    Device.remove(
      {
        _id: req.params.deviceId,
      },
      function(err, device) {
        if (err) {
          res.send(err);
        }
        res.json({ message: "Device successfully deleted" });
      },
    );
  }
}
