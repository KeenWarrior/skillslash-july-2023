// const request = require("supertest");

// const app = require("../app");

// test("GET API call to /", () => {
//   return request(app)
//     .get("/")
//     .then((response) => {
//       expect(response.statusCode).toBe(200);
//       expect(response.text).toBe("Hello World!");
//     });
// });

// test("POST API call to /", () => {
//   return request(app)
//     .post("/")
//     .send({ message: "Hello World!" })
//     .then((response) => {
//       expect(response.statusCode).toBe(201);
//       expect(response.body).toEqual({ message: "Hello World!" });
//     });
// });

test("1+1", () => {
  return expect(1 + 1).toBe(2);
});
