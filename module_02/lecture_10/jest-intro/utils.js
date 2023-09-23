function sum(a, b) {
  return a + b;
}

async function hello() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("hello");
    }, 1000);
  });
}

module.exports = {
  sum,
  hello
};
