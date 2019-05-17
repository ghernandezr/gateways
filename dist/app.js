"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const routes_1 = require("./gateway/routes");
const routes_2 = require("./device/routes");
const mongoose = require("mongoose");
class App {
    constructor() {
        this.gatewayRoute = new routes_1.GatewayRoutes();
        this.deviceRoute = new routes_2.DeviceRoutes();
        this.mongoUrl = "mongodb://localhost/gateways";
        this.app = express();
        this.config();
        this.gatewayRoute.routes(this.app);
        this.deviceRoute.routes(this.app);
        this.mongoSetup();
    }
    config() {
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    mongoSetup() {
        mongoose.Promise = global.Promise;
        mongoose
            .connect(this.mongoUrl, { useNewUrlParser: true })
            .then(() => {
            console.log("Database connection successful");
        })
            .catch(err => {
            console.error("Database connection error");
        });
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map