function decode(message: string) {
    const pass = (m: string) => !isOpen(m) && !isClose(m);
    let correct = '';
    let messageClean = message.split(' ');

    return messageClean;
}
function decode2(text: string): string {
    const stack: string[] = [];
  let result: string = "";

  for (const char of text) {
    if (char === "(") {
      stack.push(char);
    } else if (char === ")") {
      const reversed = stack.pop().split("").reverse().join("");
      result += reversed;
    } else {
      result += char;
    }

    // Actualizamos el nivel de anidamiento
    if (char === "(") {
      stack[stack.length - 1] = stack[stack.length - 1] + 1;
    } else if (char === ")") {
      stack[stack.length - 1] = stack[stack.length - 1] - 1;
    }
  }

  // Eliminamos los paréntesis del resultado
  for (let i = 0; i < stack.length; i++) {
    result = result.replace(stack[i], "");
  }

  return result;
}
}

const reverse = (m: string) => m.split('').reverse().join('');
const isOpen = (m: string) => m === '(';
const isClose = (m: string) => m === ')';

const testCase4 = [
    {
        received: 'hola (odnum)',
        expected: 'hola mundo'
    },
    {
        received: '(olleh) (dlrow)!',
        expected: 'hello world!'
    },
    {
        received: 'sa(u(cla)atn)s',
        expected: 'santaclaus'
    }
];
// Paso a paso el ultimo:
// 1. Invertimos el anidado -> sa(ualcatn)s
// 2. Invertimos el que queda -> santaclaus
testCase4.forEach(({ received, expected }) => {
    console.log(`
        received: [${received}]
        expected: [${expected}]
        returned: [${decode(received)}]
        returned2: [${decode2(received)}]
    `);
});
