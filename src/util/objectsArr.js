let findObjectByKey = (array, key, value) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i][key] === value) {
            return array[i];
        }
    }
    return array;
};

let findObjectById = (array, key, value) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i][key] === value) {
            return array[i];
        }
    }
    return {};
};


export default {
    findObjectByKey,
    findObjectById
}