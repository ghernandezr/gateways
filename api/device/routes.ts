import { DeviceController } from "./controller";

export class DeviceRoutes {
  public deviceController: DeviceController = new DeviceController();
  public routes(app): void {
    app
      .route("/device")
      .get(this.deviceController.listDevices)
      .post(this.deviceController.createDevice);

    app
      .route("/device/:deviceId")
      .get(this.deviceController.readDevice)
      .put(this.deviceController.updateDevice)
      .delete(this.deviceController.deleteDevice);
  }
}
