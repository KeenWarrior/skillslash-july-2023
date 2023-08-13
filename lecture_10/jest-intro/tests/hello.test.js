const { sum, hello } = require("../utils");

test("check large additions", () => {
  expect(sum(11111111111111111, 1)).toBe(11111111111111112);
});

test("hello resolves to hello", async ()=>{
    return await expect(hello()).resolves.toBe("hello");
})
