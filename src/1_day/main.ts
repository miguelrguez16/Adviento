const findFirstRepeated = (gift: Array<number>) => {
  const set = new Set(gift);
  // no hay repetidos
  if (set.size === gift.length) return -1;
  // hay repetidos
  const perfectArray = Array.from(set.values());
  let repeated: Array<number> = new Array<number>();
  let found = false;
  for (let i = 0; i < gift.length && !found; i++) {}

  gift.forEach((value, index) => {
    if (value !== perfectArray.at(index)) {
      repeated.push(value);
    }
  });

  return repeated.at(0);
};

[
  {
    gift: [2, 1, 3, 5, 3, 2],
    expected: 3,
  },
  {
    gift: [1, 2, 3, 4],
    expected: -1,
  },
  {
    gift: [5, 1, 5, 1],
    expected: 5,
  },
  {
    gift: [2, 1, 3, 5, 3, 2, 6],
    expected: 3,
  },
].forEach(({ gift, expected }) => {
  const start = performance.now();
  console.log(
    `${gift} -> expected: ${expected} -> received ${findFirstRepeated(gift)}`
  );
  const end = performance.now();
  console.log(`Call to findFirstRepeated took ${end - start} milliseconds\n`);
});
