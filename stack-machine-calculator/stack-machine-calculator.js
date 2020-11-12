const stackMachineCalculator = instructions => {

  let stackArr = [];


  if (instructions.includes(' ')) {
    stackArr.unshift(instructions.split(' '));
  }

  let flatArr = stackArr.flat();
  let temp = flatArr.filter(item => !isNaN(Number(item)));



  for (item of flatArr) {
    switch (true) {
      case (flatArr.includes('+')):
        return temp.reduce((acc, val) => {
          return (Number(acc) + Number(val));
        }, 0);
        break;
      case (flatArr.includes('-')):
        return temp.reduce((acc, val) => {
          return (Number(val) - Number(acc));
        });
        break;
      case (flatArr.includes('*')):
        return temp.reduce((acc, val) => {
          return (Number(acc) * Number(val));
        }, 1);
        break;
      case (flatArr.includes('/')):
        return temp.reduce((acc, val) => {
          return (Number(acc) / Number(val));
        });
        break;
      case (flatArr.includes('POP')):
        flatArr.pop();
        console.log(flatArr);
        break;
      case (flatArr.includes('DUP')):
        let topVal = flatArr[0];
        flatArr.unshift(topVal), flatArr.pop();
        console.log(flatArr);
        break;
    }
  }

  if (instructions.split(' ').length === 1) {
    return Number(instructions.split(' ')[0]);
  } else {
    return Number(flatArr.pop());
  }


};

console.log(stackMachineCalculator("13"));

module.exports = stackMachineCalculator;
