const out = Array.fromAsync([1, 2, 3], async (x) => x * 2);

console.log(out); // [2, 4, 6]
