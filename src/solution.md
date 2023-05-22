const arrServer = [
  {
    mean: "abc",
    isCorrectWord: "correct"
  },
  {
    mean: "bcd",
    isCorrectWord: "wrong"
  },
  {
    mean: "efg",
    isCorrectWord: "correct"
  }
];
const arrClient = ["wrong", "correct", "correct"];
const arrCorrectWord = [];

const handelCountCorrectAnswer = () => {
  for (let i = 0; i < arrServer.length; i++) {
    for (let j = 0; j < arrClient.length; j++) {
      if (arrServer[i].isCorrectWord === arrClient[j]) {
        arrCorrectWord.push(i);
      }
      i++;
    }
    return arrCorrectWord;
  }
};
console.log(handelCountCorrectAnswer());
