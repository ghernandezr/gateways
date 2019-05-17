"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const controller_1 = require("./controller");
class DeviceRoutes {
    constructor() {
        this.deviceController = new controller_1.DeviceController();
    }
    routes(app) {
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
exports.DeviceRoutes = DeviceRoutes;
//# sourceMappingURL=routes.js.map