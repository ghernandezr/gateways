import { GatewayController } from "./controller";

export class GatewayRoutes {
  public gatewayController: GatewayController = new GatewayController();

  public routes(app): void {
    app
      .route("/gateway")
      .get(this.gatewayController.listGateways)
      .post(this.gatewayController.createGateway);

    app
      .route("/gateway/:gatewayId")
      .get(this.gatewayController.readGateway)
      .put(this.gatewayController.updateGateway)
      .delete(this.gatewayController.deleteGateway);

    app
      .route("/gateway/:gatewayId/device/:deviceId")
      .delete(this.gatewayController.deleteGatewayDevice);
  }
}
