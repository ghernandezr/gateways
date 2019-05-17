import * as mongoose from "mongoose";
import { GatewaySchema } from "./model";

const Gateway = mongoose.model("Gateway", GatewaySchema);

export class GatewayController {
  public listGateways(req, res) {
    Gateway.find({}, function(err, gateway) {
      if (err) {
        res.send(err);
      }
      res.json(gateway);
    });
  }

  public createGateway(req, res) {
    let gateway = new Gateway(req.body);
    gateway.save(function(err, gateway) {
      if (err) {
        res.send(err);
      }
      res.json(gateway);
    });
  }

  public readGateway(req, res) {
    Gateway.findById(req.params.gatewayId, function(err, gateway) {
      if (err) {
        res.send(err);
      }
      res.json(gateway);
    });
  }

  public updateGateway(req, res) {
    Gateway.findOneAndUpdate(
      { _id: req.params.gatewayId },
      req.body,
      { new: true },
      function(err, gateway) {
        if (err) {
          res.send(err);
        }
        res.json(gateway);
      },
    );
  }

  public deleteGateway(req, res) {
    Gateway.deleteOne(
      {
        _id: req.params.gatewayId,
      },
      function(err, gateway) {
        if (err) {
          res.send(err);
        }
        res.json({ message: "Gateway successfully deleted" });
      },
    );
  }

  public deleteGatewayDevice(req, res) {
    Gateway.findById(req.params.gatewayId, function(err, gateway) {
      let devices = gateway.devices.filter(it => {
        return it.localeCompare(req.params.deviceId) !== 0;
      });
      gateway.devices = devices;
      Gateway.findOneAndUpdate(
        { _id: req.params.gatewayId },
        gateway,
        { new: true },
        function(err, gateway) {
          if (err) {
            res.send(err);
          }
          res.json(gateway);
        },
      );
    });
  }
}
