import app from "../app";
import * as chai from "chai";
import chaiHttp = require("chai-http");
import "mocha";
import * as mongoose from "mongoose";
import { DeviceSchema } from "../device/model";

const Device = mongoose.model("Device", DeviceSchema);

chai.use(chaiHttp);
const expect = chai.expect;
chai.should();

describe("Devices API Request", () => {
  before(function() {
    console.log("before");
  });

  after(function(done) {
    mongoose.connection.db.dropDatabase(done);
  });

  beforeEach(done => {
    console.log("before");
    Device.deleteMany({}, () => {
      done();
    });
  });

  it("it should  create a device with defualt values", async () => {
    let device = {
      UID: 2341231,
      vendor: "Intel",
    };
    chai
      .request(app)
      .post("/device")
      .send(device)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        res.body.should.have.property("UID").eql(2341231);
        res.body.should.have.property("vendor").eql("Intel");
        res.body.should.have.property("createdDate");
        res.body.should.have.property("status");
        res.body.status.should.have.property("type").eql("online");
      });
  });

  it("it should  create a device with status offline", async () => {
    let device = {
      UID: 2341231,
      vendor: "Intel",
      status: {
        type: "offline",
      },
    };
    chai
      .request(app)
      .post("/device")
      .send(device)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        res.body.should.have.property("UID").eql(2341231);
        res.body.should.have.property("vendor").eql("Intel");
        res.body.should.have.property("createdDate");
        res.body.should.have.property("status");
        res.body.status.should.have.property("type").eql("offline");
      });
  });

  it("it should  update a device", async () => {
    //Sample data
    let deviceJson = {
      UID: 12312123,
      vendor: "Intel1",
    };

    let deviceModel = new Device(deviceJson);
    deviceModel.save((err, device) => {
      //Modifying dateway name
      device.vendor = "Intel2";
      chai
        .request(app)
        .put("/device/" + device._id)
        .send(device)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("vendor").eql("Intel2");
        });
    });
  });

  it("should return all devices", async () => {
    return chai
      .request(app)
      .get("/device")
      .then(res => {
        res.should.have.status(200);
        res.body.should.be.a("array");
      });
  });
});
