"use strict";
import * as mongoose from "mongoose";
import { DeviceSchema } from "../device/model";
let Schema = mongoose.Schema;

export const GatewaySchema = new Schema({
  serialNumber: {
    type: String,
    required: "Serial number is required",
    unique: true,
  },
  name: {
    type: String,
    required: "Name is required",
  },
  ipV4Address: {
    type: String,
    required: "Ip Address is required",
    match: [
      /^(?=\d+\.\d+\.\d+\.\d+$)(?:(?:25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\.?){4}$/,
      "Please fill a valid ipV4 address",
    ],
  },
  devices: {
    type: [
      {
        type: Schema.Types.ObjectId,
        ref: "Device",
      },
    ],
    default: undefined,
    validate: [
      val => {
        return val.length <= 10;
      },
      "{PATH} exceeds the limit of 10",
    ],
  },
});
