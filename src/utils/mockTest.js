export const sumOfArray = (arr) => {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

export const removeOdd = (arr) => {
    return arr.filter((num) => num % 2 === 0);
}

export const squaredArray = (arr) => {
    return arr.map((num) => num ** 2);
}