export const getRandomPositiveInteger = (max) => {
    return Math.floor(Math.random() * max + 1);
}

export const testIterateeMultiplyFunction = (number) => {
    return number * number;
}

export const testIterateeStringConcateFunction = (string) => {
    return string + " " + string;
}

export const testIterateeObjectWithReturn = (testObject) => {
    return testObject.name;
}

export const testIterateeObjectWithoutReturn = (testObject) => {
}