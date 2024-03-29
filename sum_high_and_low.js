// Sum all the numbers of the array (in F# and Haskell you get a list) except the highest and the lowest element (the value, not the index!).
// (The highest/lowest element is respectively only one element at each edge, even if there are more than one with the same value!)
// Example:
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// If array is empty, null or None, or if only 1 Element exists, return 0.
// Note:In C++ instead null an empty vector is used. In C there is no null. ;-)
// -- There's no null in Haskell, therefore Maybe [Int] is used. Nothing represents null.

var work = [6, 2, 1, 8, 10];

function sumArray(array) {
  let sortArray = array.sort(function(a, b) {
    return a - b;
  });
  let sliceArray = sortArray.slice(1, 4);
  let sum = 0;
  sliceArray.forEach(number => {
    sum += number;
  });
  return sum;
}

sumArray(test);
