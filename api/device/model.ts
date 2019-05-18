import * as mongoose from "mongoose";
let Schema = mongoose.Schema;

export const DeviceSchema = new Schema({
  UID: {
    type: Number,
    required: "Kindly enter the name of the task",
  },
  vendor: {
    type: String,
    required: "Kindly enter the name of the task",
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: {
      type: String,
      enum: ["online", "offline"],
      default: "online",
    },
  },
});
