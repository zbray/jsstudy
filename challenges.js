// more leetcode challenges

// 2634. Filter Elements from Array

// Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

// The fn function takes one or two arguments:

//     arr[i] - number from the arr
//     i - index of arr[i]

// filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

// Please solve it without the built-in Array.filter method.

var filter = function (arr, fn) {
  const result = []; // initiate a blank array that will be where we push the truthy values
  for (let i = 0; i < arr.length; i++) { //forloop to loop through the provided array (arr)
    if (fn(arr[i], i)) { //checking each element in the array against the fn function
      result.push(arr[i]); // code that will execute for each element that proves fn true, will push to the arr array
    }
  }
  return result; // returns the array (arr) that's been assigned to the initiated array (result)
};
