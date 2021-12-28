/*
Write a function that, when passed an array and a target sum, returns, efficiently with respect to time used,
two distinct zero-based indices of any two of the numbers, whose sum is equal to the target sum. If there are no two numbers,
the function should return null.

For example, findTwoSum([ 3, 1, 5, 7, 5, 9 ], 10) should return an array containing any of the following pairs of indices:

0 and 3 (or 3 and 0) as 3 + 7 = 10
1 and 5 (or 5 and 1) as 1 + 9 = 10
2 and 4 (or 4 and 2) as 5 + 5 = 10
 */
/**
 * @param {number[]} numbers The array of numbers.
 * @param {number} sum The required target sum.
 * @return {number[]} An array of 2 indices. The indices of the two elements whose sum is equal to sum.
 */
function findTwoSum(numbers, sum) {
/*
    let count = 0;
    let indices = [];

    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if (numbers[i]+numbers[j]===sum && i !== j ){
                let numbersSums = [i,j];
                indices.push(numbersSums);
                count++;
                if (count > 2){
                    for (let index of indices){
                        return index;
                    }

                }
            }
        }
    }
    return null;
*/
    const indicies = {}

    for (let i = 0; i < numbers.length; i++) {
        const num = numbers[i]
        console.log('***********')
        if (indicies[sum - num] != null) {
            return [indicies[sum - num], i]
        }
        indicies[num] = i
        console.log(indicies);
    }
    return null;

}

const indices = findTwoSum([ 3, 1, 1, 7, 1, 1 ], 10);
//const indices2 = findTwoSum([ 3, 1, 5, 7, 5, 9 ], 11);
//const indices3 = findTwoSum([ 3, 1, 5, 7, 5, 9 ], 9);
//const indices4 = findTwoSum([ 3, 1, 5, 7, 5, 9 ], 8);
//const indices5 = findTwoSum([ 3, 3, 5, 7, 3, 9 ], 6);
//const indices6 = findTwoSum([ 3, 8, 9 ], 6);
console.log(indices);
//console.log(indices2);
//console.log(indices3);
//console.log(indices4);
//console.log(indices5);
//console.log(indices6);
