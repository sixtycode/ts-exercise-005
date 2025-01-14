// Exercise

// 1. Write a function to get the lowest, highest and average value in the array (with and without sort function).
// a. Example : arr = [12, 5, 23, 18, 4, 45, 32] → {lowest : 4, highest: 45, average: 19.8xxx}

// 2. Write a function that takes an array of words and returns a string by concatenating the words in the array,
// separated by commas and - the last word - by an 'and'.
// a. Example : arr = ["apple", "banana", "cherry", "date"] → “apple,banana,cherry, and date”

// 3. Write a function from a given array of numbers and return the second smallest number
// a. Example : numbers = [5, 3, 1, 7, 2, 6] → 2
function secondSmallest(_arrSecSmallest: number[]): number {
  let _firstSmallest: number = Math.min(..._arrSecSmallest);
  let _newArr: number[] = [];
  let _counter: number = 0;
  while (_counter < _arrSecSmallest.length) {
    if (_arrSecSmallest[_counter] != _firstSmallest) {
      _newArr.push(_arrSecSmallest[_counter]);
    }
    _counter++;
  }
  return Math.min(..._newArr);
}

let _threeArray: number[] = [5, 3, 1, 7, 2, 6];
console.log(secondSmallest(_threeArray));

// 4. Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays
// are of the same length.
// a. Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]
function calculateElement(_arrOne: number[], _arrTwo: number[]): number[] {
  let _newArr: number[] = [];
  let _counter: number = 0;
  while (_counter < _arrOne.length) {
    _newArr.push(_arrOne[_counter] + _arrTwo[_counter]);
    _counter++;
  }
  return _newArr;
}

let _fourOne: number[] = [1, 2, 3];
let _fourTwo: number[] = [3, 2, 1];
console.log(calculateElement(_fourOne, _fourTwo));

// 5. Write a function that adds an element to the end of an array. However, the element should only be added if it is
// not already in the array.
// a. Example : arr = [1, 2, 3, 4], newElement = 4 → [1, 2, 3, 4]
// b. Example : arr = [1, 2, 3, 4], newElement = 7 → [1, 2, 3, 4, 7]
function insertUnique(_arrNum: number[], _newEle: number): number[] {
  let _newArr: number[] = _arrNum;
  let _counter: number = 0;
  let _isDuplicate: boolean = false;
  while (_counter < _arrNum.length) {
    if (_newEle == _arrNum[_counter]) {
      _isDuplicate = true;
    }
    _counter++;
  }
  if (_isDuplicate) {
    return _newArr;
  } else {
    _newArr.push(_newEle);
    return _newArr;
  }
}

let _arrFive: number[] = [1, 2, 3, 4];
let _newElem: number = 4;
console.log(insertUnique(_arrFive, _newElem));
let _newElement: number = 7;
console.log(insertUnique(_arrFive, _newElement));

// Exercise

// 1. Write a function from a given array of mixed data types and return the sum of all the number
// a. Example : mixedArray = ["3", 1, "string", null, false, undefined, 2] → 3

// 2. Write a function to insert multiple given integer (not an array) to an array and have a maximum size input. The
// array can only have a maximum size from a given input. (if the maximum size of the given input is 5 than the
// array can only contain 5 elements).
// a. Example :
// maxSize = 5, given integers is 5, 10, 24, 3, 6, 7, 8
// The function will return [5, 10, 24, 3, 6]

// 1. Write a function that will combine 2 given array into one array
// a. Example : arr1 = [1, 2, 3], arr2 = [4, 5, 6] → [1, 2, 3, 4, 5, 6]
function combineTwo(_arrWan: number[], _arrTu: number[]): number[] {
  let _newArr: number[] = _arrWan;
  let _counter: number = 0;
  while (_counter < _arrTu.length) {
    _newArr.push(_arrTu[_counter]);
    _counter++;
  }
  return _newArr;
}

let _kombinOne: number[] = [1, 2, 3];
let _kombinTwo: number[] = [4, 5, 6];
console.log(combineTwo(_kombinOne, _kombinTwo));

// 2. Write a function to find duplicate values in an array
// a. Example : arr = [1, 2, 2, 2, 3, 3, 4, 5, 5] → [2, 3, 5]
function duplicateFinder(_inputArray: number[]): number[] {
  let _dupArr: number[] = [];
  let _counter: number = 0;
  while (_counter < _inputArray.length) {
    let _counterTwo: number = _counter + 1;
    while (_counterTwo < _inputArray.length) {
      if (_inputArray[_counter] == _inputArray[_counterTwo]) {
        let _counterThree: number = 0;
        let _isUnique: boolean = true;
        while (_counterThree < _dupArr.length) {
          if (_dupArr[_counterThree] == _inputArray[_counter]) {
            _isUnique = false;
          }
          _counterThree++;
        }
        if (_isUnique) {
          _dupArr.push(_inputArray[_counter]);
        }
        _counterTwo = _inputArray.length;
      }
      _counterTwo++;
    }
    _counter++;
  }
  return _dupArr;
}

let _initDup: number[] = [1, 2, 2, 2, 3, 3, 4, 5, 5];
console.log(duplicateFinder(_initDup));

// 3. Write a function to find the difference in 2 given array
// a. Example : arr1 = [1, 2, 3, 4, 5], arr2 = [3, 4, 5, 6, 7] → [1, 2, 6, 7]
function differenceFinder(_arrFirst: number[], _arrSecond: number[]): number[] {
  let _tempDistinct: number[] = _arrFirst;
  let _counter: number = 0;
  while (_counter < _arrSecond.length) {
    _tempDistinct.push(_arrSecond[_counter]);
    _counter++;
  }
  _counter = 0;
  let _newDistinct: number[] = [];
  while (_counter < _tempDistinct.length) {
    let _counterTwo = _counter + 1;
    let _isDuplicate: boolean = false;
    while (_counterTwo < _tempDistinct.length) {
      if (_tempDistinct[_counter] == _tempDistinct[_counterTwo]) {
        _tempDistinct[_counterTwo] = -999;
        _isDuplicate = true;
      }
      _counterTwo++;
    }
    if (_isDuplicate) {
      _tempDistinct[_counter] = -999;
    }
    _counter++;
  }
  _counter = 0;
  while (_counter < _tempDistinct.length) {
    if (_tempDistinct[_counter] != -999) {
      _newDistinct.push(_tempDistinct[_counter]);
    }
    _counter++;
  }
  return _newDistinct.sort((a, b) => a - b);
}

let _firstArray: number[] = [1, 2, 3, 4, 5];
let _secondArray: number[] = [3, 4, 5, 6, 7];
console.log(differenceFinder(_firstArray, _secondArray));

// Exercise

// 1. Based on the array below write a function that will return primitive data types only.
// let arr = [1, [], undefined, {}, "string", {}, []];
// a. The function will return [1, undefined, “string”]

// 2. Write a function from the below array of number that will return sum of duplicate values.
// let arr = [10, 20, 40, 10, 50, 30, 10, 60, 10];
// a. The function will return 40

// 3. Write a game of rock, paper, scissor function that will return 'Win' or 'Lose'. The function will randomly pick
// between rock, paper, or scissor.
// a. Example: if you throw a rock as an argument and the function pick a scissor then it will return 'Win'
