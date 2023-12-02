const testCaseOne = [
    {
        gift: [2, 1, 3, 5, 3, 2],
        expected: 3
    },
    {
        gift: [1, 2, 3, 4],
        expected: -1
    },
    {
        gift: [5, 1, 5, 1],
        expected: 5
    },
    {
        gift: [1, 5, 5, 1],
        expected: 5
    },
    {
        gift: [2, 1, 3, 5, 3, 2, 6],
        expected: 3
    }
];

const findFirstRepeated = (gifts: Array<number>) => {
    const set = new Set(gifts);
    // no hay repetidos
    if (set.size === gifts.length) return -1;

    // hay repetidos
    const perfectArray = Array.from(set.values());

    for (let i = 0; i < gifts.length; i++) {
        const value = gifts.at(i);
        if (value !== perfectArray.at(i)) {
            return value;
        }
    }
    return -1;
};

testCaseOne.forEach(({ gift, expected }, index) => {
    const start = performance.now();
    console.log(
        `${gift} 
    -> expected: ${expected} -> received ${findFirstRepeated(gift)}`
    );
    const end = performance.now();
    console.log(`Case ${index + 1} -> took ${end - start} milliseconds\n`);
});
