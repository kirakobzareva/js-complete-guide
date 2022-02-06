let numbers = [2, 5, 7, 9, 10];

let filtered = numbers.filter(num => num > 5);
let mapped = numbers.map(val => ({
    num: val
}))
let multiplicationNum = numbers.reduce((previousValue, curValue) => previousValue * curValue, 1);

console.log(filtered);
console.log(mapped);
console.log(multiplicationNum);

function findMaxMin(...nums) {
    let maxNum = 0;
    let minNum = nums[0];
    for (let maxNumElement of nums) {
        if (maxNumElement > maxNum) {
            maxNum = maxNumElement;
        }
        if (minNum > maxNumElement) {
            minNum = maxNumElement;
        }
    }
    return [maxNum, minNum];
}

//console.log(findMaxMin(...numbers));

const [max, min] = findMaxMin(...numbers);
console.log(max, min);

let uniqueVal = new Set();