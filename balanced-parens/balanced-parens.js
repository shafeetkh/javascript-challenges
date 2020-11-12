const parensAreBalanced = input => {

  const openers = ['(', '{', '['];
  const closers = [')', '}', ']'];

  let temp = [];

  for (item of input.split('')) {
    if (openers.includes(item)) {
      temp.push(item);
    }
  }

  for (item of input.split('')) {
    if (closers.includes(item)) {
      temp.push(item);
    }
  }


  if (temp.length % 2 === 1) {
    return false;
  }

  return true;

};


console.log(parensAreBalanced('([])'));


module.exports = parensAreBalanced;
