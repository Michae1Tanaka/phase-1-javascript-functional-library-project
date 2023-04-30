const unmodifiedTestArr = [1, 2, 3, 4];
const unmodifiedTestObj = { one: 1, two: 2, three: 3, four: 4 };
const testArr = [1, 2, 3, 4];
const testObj = Object.assign({}, unmodifiedTestObj);

function myEach(collection, callback) {
  const values = Object.values(collection);
  for (let num of values) {
    callback(num);
  }
  return collection;
}

function myMap(collection, callback) {
  const values = Object.values(collection);
  let newCollection = values.slice();
  for (let i = 0; i < newCollection.length; i++) {
    newCollection[i] = callback(newCollection[i]);
  }
  return newCollection;
}

function myReduce(collection, callback, acc) {
  const values = Object.values(collection);
  console.log(values);
  let newValues = 0;
  if (!acc) {
    acc = values[0];
    for (let i = 1; i < values.length; i++) {
      acc = callback(acc, values[i], values);
      newValues = acc;
    }
  } else if (acc) {
    for (let i = 0; i < values.length; i++) {
      acc = callback(acc, values[i], values);
      newValues = acc;
    }
  }
  return newValues;
}

function myFind(collection, predicate) {
  let returnVal;
  const elements = Object.values(collection);
  for (let element of elements) {
    if (predicate(element)) {
      returnVal = element;
      return returnVal;
    }
  }
}

function myFilter(collection, predicate) {
  let returnVal = [];
  const elements = Object.values(collection);
  for (let element of elements) {
    if (predicate(element)) {
      returnVal.push(element);
    }
  }
  return returnVal;
}

function mySize(collection) {
  let returnVal = 0;
  const elements = Object.values(collection);
  for (let element of elements) {
    if (element) {
      returnVal++;
    }
  }
  return returnVal;
}

function myFirst(arr, n) {
  let returnVal;
  if (!n) {
    returnVal = arr[0];
  } else {
    returnVal = [];
    for (let i = 0; i < n; i++) {
      console.log(arr[i]);
      returnVal.push(arr[i]);
    }
  }
  return returnVal;
}

function myLast(arr, n) {
  let returnVal;
  arr.reverse();
  if (!n) {
    returnVal = arr[0];
  } else {
    returnVal = [];
    for (let i = 0; i < n; i++) {
      returnVal.unshift(arr[i]);
    }
  }
  arr.reverse();
  return returnVal;
}

function myKeys(object) {
  let keys = [];
  for (let key in object) {
    keys.push(key);
  }
  return keys;
}

function myValues(object) {
  let values = [];
  let keys = myKeys(object)
  for (let i = 0; i < keys.length; i++) {
    values.push(object[keys[i]]);
  }
  return values;
}

