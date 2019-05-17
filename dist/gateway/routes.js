"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const controller_1 = require("./controller");
class GatewayRoutes {
    constructor() {
        this.gatewayController = new controller_1.GatewayController();
    }
    routes(app) {
        app
            .route("/gateway")
            .get(this.gatewayController.listGateways)
            .post(this.gatewayController.createGateway);
        app
            .route("/gateway/:gatewayId")
            .get(this.gatewayController.readGateway)
            .put(this.gatewayController.updateGateway)
            .delete(this.gatewayController.deleteGateway);
    }
}
exports.GatewayRoutes = GatewayRoutes;
//# sourceMappingURL=routes.js.map