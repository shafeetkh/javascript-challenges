// [1, 2, 3, 4, 3], your algorithm should return 3


const mostRecurrent = (set) => {
  return set.sort((a, b) =>
    set.filter(v => v === a).length - set.filter(v => v === b).length
  ).pop();
};




module.exports = mostRecurrent;
