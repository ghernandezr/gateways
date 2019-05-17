import { expect } from "chai";
//import chaiHttp from "chai-http";
import app from "../app";

//chai.use(chaiHttp);
chai.should();

describe("Students", () => {
  it("should return hello world", () => {
    const result = "Hello World!";
    chai.expect(result).to.equal("Hello World!");
  });
});
