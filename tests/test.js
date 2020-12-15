const assertEquals = (fn, answer) => {
  fn === answer ? console.error(`✅ Passed ${fn} == ${answer}`) : console.log(`❌ Failed ${fn} !== ${answer}`);
  return;
};
const assertSimilar = (fn, answer) => {
  if (typeof fn === "object") {
    return JSON.stringify(fn) == JSON.stringify(answer)
      ? console.error(`✅ Passed ${JSON.stringify(fn, null, 4)} === ${JSON.stringify(answer, null, 4)}`)
      : console.log(`❌ Failed ${JSON.stringify(fn, null, 4)} !== ${JSON.stringify(answer, null, 4)}`);
  }

  return fn === answer ? console.error(`✅ Passed ${fn} == ${answer}`) : console.log(`❌ Failed ${fn} !== ${answer}`);
};


const assertNotEquals = (fn, shouldBe, explainerString) => {
  if (fn === shouldBe) console.log(explainerString)
}

const randomNumber = () => (Math.random() * 100).toFixed();

exports.assertEquals = assertEquals;
exports.assertSimilar = assertSimilar;
exports.assertNotEquals = assertNotEquals;
exports.randomNumber = randomNumber;
