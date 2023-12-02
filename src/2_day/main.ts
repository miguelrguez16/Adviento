const testCaseTwo = [
    {
        gifts: ['tren', 'oso', 'pelota'],
        materials: 'tronesa', // tren oso
        expected: ['tren', 'oso']
    },
    {
        gifts: ['juego', 'puzzle'],
        materials: 'jlepuz',
        expected: ['puzzle']
    },
    {
        gifts: ['libro', 'ps5'],
        materials: 'psli',
        expected: []
    }
];

const manufacture = (gifts: Array<string>, materials: string) => {
    let values = new Array<string>();
    gifts.forEach((value: string) => {
        const gift = Array.from(new Set(value).values());
        if (gift.every((v) => materials.indexOf(v) !== -1)) {
            // se puede hacer el gift
            values.push(value);
        }
    });

    return values;
};

testCaseTwo.forEach(({ gifts, materials, expected }) =>
    console.log(`
        gifts: [${gifts}]  materials: [${materials}]
        expected: [${expected}] received:  [${manufacture(
        gifts,
        materials
    )}]\n `)
);
