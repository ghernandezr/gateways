"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const model_1 = require("./model");
const Gateway = mongoose.model("Gateway", model_1.GatewaySchema);
class GatewayController {
    listGateways(req, res) {
        Gateway.find({}, function (err, gateway) {
            if (err) {
                res.send(err);
            }
            res.json(gateway);
        });
    }
    createGateway(req, res) {
        let gateway = new Gateway(req.body);
        gateway.save(function (err, gateway) {
            if (err) {
                res.send(err);
            }
            res.json(gateway);
        });
    }
    readGateway(req, res) {
        Gateway.findById(req.params.gatewayId, function (err, gateway) {
            if (err) {
                res.send(err);
            }
            res.json(gateway);
        });
    }
    updateGateway(req, res) {
        Gateway.findOneAndUpdate({ _id: req.params.gatewayId }, req.body, { new: true }, function (err, gateway) {
            if (err) {
                res.send(err);
            }
            res.json(gateway);
        });
    }
    deleteGateway(req, res) {
        Gateway.remove({
            _id: req.params.gatewayId,
        }, function (err, gateway) {
            if (err) {
                res.send(err);
            }
            res.json({ message: "Gateway successfully deleted" });
        });
    }
}
exports.GatewayController = GatewayController;
//# sourceMappingURL=controller.js.map