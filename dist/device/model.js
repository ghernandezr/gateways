"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
let Schema = mongoose.Schema;
exports.DeviceSchema = new Schema({
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
        type: [
            {
                type: String,
                enum: ["online", "offline"],
            },
        ],
        default: ["online"],
    },
});
//# sourceMappingURL=model.js.map