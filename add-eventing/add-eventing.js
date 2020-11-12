const addEventing = obj => {
    let arr = [];
    let newObj = {
        on: (step, callback) => {
            if (!arr[step]) {
                arr[step] = [];
            }
            arr[step].push(callback);
        },
        trigger: (step, ...args) => {
            if (arr[step]) {
                arr[step].map((callback) => callback(...args));
            }
        }
    };
    return newObj;
};


module.exports = addEventing;