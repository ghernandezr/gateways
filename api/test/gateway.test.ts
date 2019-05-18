import app from "../app";
import * as chai from "chai";
import chaiHttp = require("chai-http");
import "mocha";
import * as mongoose from "mongoose";
import { GatewaySchema } from "../gateway/model";
import { DeviceSchema } from "../device/model";

const Gateway = mongoose.model("Gateway", GatewaySchema);
const Device = mongoose.model("Device", DeviceSchema);

chai.use(chaiHttp);
const expect = chai.expect;
chai.should();

describe("Gateways API Request", () => {
  after(function(done) {
    mongoose.connection.db.dropDatabase(done);
  });

  beforeEach(done => {
    console.log("before");
    Device.deleteMany({}, () => {
      Gateway.deleteMany({}, () => {
        done();
      });
    });
  });

  it("it should  create a gateway without devices", async () => {
    let gateway = {
      serialNumber: "123FFF3212",
      name: "Carter1",
      ipV4Address: "123.34.122.32",
    };
    chai
      .request(app)
      .post("/gateway")
      .send(gateway)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        res.body.should.have.property("serialNumber").eql("123FFF3212");
        res.body.should.have.property("name").eql("Carter1");
        res.body.should.have.property("ipV4Address").eql("123.34.122.32");
      });
  });

  it("it should  create a gateway with wrong IP", async () => {
    let gateway = {
      serialNumber: "123FFF3212",
      name: "Carter1",
      ipV4Address: "123.34.122.3332",
    };
    chai
      .request(app)
      .post("/gateway")
      .send(gateway)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        res.body.should.have.property("errors");
        res.body.errors.should.have.property("ipV4Address");
        res.body.errors.ipV4Address.should.have
          .property("message")
          .eql("Please fill a valid ipV4 address");
      });
  });

  it("it should  update a gateway", async () => {
    //Sample data
    let gatewayJson = {
      serialNumber: "123FFF3212",
      name: "Carter1",
      ipV4Address: "123.34.122.32",
    };

    let gatewayModel = new Gateway(gatewayJson);
    gatewayModel.save((err, gateway) => {
      //Modifying dateway name
      gateway.name = "Carter2";
      chai
        .request(app)
        .put("/gateway/" + gateway._id)
        .send(gateway)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("name").eql("Carter2");
        });
    });
  });

  it("should return all gateways", async () => {
    return chai
      .request(app)
      .get("/gateway")
      .then(res => {
        res.should.have.status(200);
        res.body.should.be.a("array").that.is.empty;
      });
  });
});
