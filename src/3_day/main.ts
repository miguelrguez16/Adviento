const testCaseThree = [
    {
        original: 'abcd',
        modified: 'abcde',
        expected: 'e'
    },
    {
        original: 'stepfor',
        modified: 'stepor',
        expected: 'f'
    },
    {
        original: 'abcde',
        modified: 'abcde',
        expected: ''
    },
    {
        original: '',
        modified: 'abcde',
        expected: ''
    }
];

const findNaughtyStep = (original: string, modified: string) => {
    const originalLength = original.length;
    const modifiedLength = modified.length;
    let found: boolean = false;
    let returnVa = '';

    if (originalLength >= modifiedLength) {
        for (let i = 0; i < originalLength && !found; i++) {
            if (original.at(i) !== modified.at(i)) {
                returnVa = original.at(i);
                found = true;
            }
        }
    } else {
        for (let i = 0; i < modifiedLength && !found; i++) {
            if (original.at(i) !== modified.at(i)) {
                returnVa = modified.at(i);
                found = true;
            }
        }
    }

    return returnVa;
};

const sec = (original: string, modified: string) => {
    let a = Array.from(original);
    let b = Array.from(modified);
    console.log(`${a}\n${b}`);
};

testCaseThree.forEach(({ original, modified, expected }) =>
    console.log(`
        original: [${original}]
        modified: [${modified}]
        expected: [${expected}] received:  [${findNaughtyStep(
        original,
        modified
    )}]\n
    ${sec(original, modified)} `)
);
