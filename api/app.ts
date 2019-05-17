import * as express from "express";
import * as bodyParser from "body-parser";
import { GatewayRoutes } from "./gateway/routes";
import { DeviceRoutes } from "./device/routes";

import * as mongoose from "mongoose";

class App {
  public app: express.Application;
  public gatewayRoute: GatewayRoutes = new GatewayRoutes();
  public deviceRoute: DeviceRoutes = new DeviceRoutes();
  public mongoUrl: string = "mongodb://localhost/gateways";

  constructor() {
    this.app = express();
    this.config();
    this.gatewayRoute.routes(this.app);
    this.deviceRoute.routes(this.app);
    this.mongoSetup();
  }

  private config(): void {
    // support application/json type post data
    this.app.use(bodyParser.json());
    //support application/x-www-form-urlencoded post data
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  private mongoSetup(): void {
    mongoose.Promise = global.Promise;
    mongoose.set("useFindAndModify", false);
    mongoose.set("useCreateIndex", true);
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

export default new App().app;
