const { sum } = require("../src/util");

let count = 0;

beforeEach(() => {
  count = 0;
  console.log("value is not reset to 0");
});

afterEach(() => {
  console.log("Drop the connection");
});

test("count is 1", () => {
  count++;
  expect(count).toBe(2);
});

test("count is again zero", () => {
  expect(count).toBe(0);
});
