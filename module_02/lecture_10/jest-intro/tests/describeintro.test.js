const request = require("supertest");
const { MongoMemoryServer } = require("mongodb-memory-server");
const app = require("../app");

const mongoose = require("mongoose");

describe("tests app for /", () => {
  beforeEach(async () => {
    const mongod = await MongoMemoryServer.create();
    const uri = mongod.getUri();
    await mongoose.connect(uri);
  });

  afterEach(async () => {
    await mongoose.connection.close();
  });

  it("GET", () => {
    return request(app)
      .get("/")
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual([]);
      });
  });

  it("POST", async () => {
    const response = await request(app).post("/").send({
      name: "John Doe",
      email: "john@gmail.com",
    });

    expect(response.statusCode).toBe(201);
    expect(response.body.name).toBe("John Doe");
    expect(response.body.email).toBe("john@gmail.com");


    const users = await request(app).get("/");
    expect(users.body.length).toBe(2);

  });
});
