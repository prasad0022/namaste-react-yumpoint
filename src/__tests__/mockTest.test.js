import { removeOdd, squaredArray, sumOfArray } from "../utils/mockTest";

test("Sum of all the numbers in an array", () => {
    const result = sumOfArray([1, 2, 3, 4]);
    const expectedResult = 10;

    expect(result).toBe(expectedResult);
});

test("Remove odd numbers from an array", () => {
    const result = removeOdd([1, 2, 3, 4]);
    const expectedResult = [2, 4];

    expect(result).toStrictEqual(expectedResult);
});

test("Sum of all the numbers in an array", () => {
    const result = squaredArray([1, 2, 3, 4]);
    const expectedResult = [1, 4, 9, 16];

    expect(result).toStrictEqual(expectedResult);
});