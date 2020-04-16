'use strict';

// YOU KNOW WHAT TO DO //
/**
 * identity: Returns the given value unchanged.
 * 
 * @param {Value} value: Input value can be any data type.
 * 
 * @return {Value}: The value returned will be the same as the input value unchanged.
 * 
 */


function identity(value) {
    return value;
}
module.exports.identity = identity;


/**
 * 
 * typeOf: Returns type of value as a string. 
 * 
 * @param {Value} value: Input value can be any data type.
 * 
 * @return {Value}: The value return will be the type of value as a string.
 * 
 */
 
 
function typeOf(value) {
   if (typeof value !== 'object') {
       return typeof value;
   } else if (Array.isArray(value) === true) {
       return 'array';
   } else if (value === null) {
       return 'null';
   } else {
       return typeof value;
   }
}
module.exports.typeOf = typeOf;


/**
 * 
 * first: Designed to tell if the given input is and array. If it is an array and the number parameter
 * is not given or is not a number, the function returns the first element in the given array. If the input
 * number is a number, then the function returs the first elements of the array coressponding with the input number.
 * 
 * @param {Array} array: The collection in which we are elvaluating.
 * @param {Number} number: The number of items we return from the input array.
 * 
 * @return {Array}: The value returned will be the first elements in the array coressponding with
 * the number.
 * 
 */
 
function first(array, number) {
       if (!Array.isArray(array)) {
           return [];
       } else if (number === undefined ||  isNaN(number) === true) {
           return array[0];
       } else {
           var arr = [];
            for (var i = 0; i <array.length && i < number; i++) {
            arr.push(array[i]);   
       }
   } return arr;
}
 module.exports.first = first;
 
 
 /**
  * 
  * last: Designed to return the last elements in an array corresponding to a given 
  * input number.
  * 
  * @param {Array} array: The collection in which we will return the last values.
  * @param {Number} number: The number of values from the back of the input array we are returning.
  * 
  * @return {Array}: The value returned is an array with the last values corresponding to the input number
  * in the array.
  * 
  */
  
function last(array, number) {
       if (!Array.isArray(array)) {
           return [];
       } else if (number === undefined ||  isNaN(number) === true) {
           return array[array.length-1];
       } else if (number > array.length) {
           return array;
       } 
       else {
           var arr = [];
            for (var i = array.length-number; i < array.length; i++) {
            arr.push(array[i]);   
       }
   } return arr;
}
module.exports.last = last;

/**
 * 
 * indexOf: returns the index of the input array that is the first occurance of a given value.
 * 
 * @param {Array} array: The collectoin in which to loop over and find the inout value.
 * @param {Value} value: Input value can be any data type.
 * 
 * @return {Number}: the returned value is a number depicting the index of the given input array.
 * If the value is not on the array the function returns -1.
 * 
 */
 
 function indexOf(array, value) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i;
        }
    } return -1;
}
module.exports.indexOf = indexOf;


/**
 * 
 * contains: Designed to determine if a given input value is in a given input array
 * 
 * @param {Array} array: The collection in which we loop over to find the given input value
 * @param {Value} value: The input value can be any data type.
 * 
 * @return {Boolean}: the function returns a boolean based on if the given input value is in the array.
 * 
 */
 
function contains(array, value) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return true;
        }
    } return false;
}
module.exports.contains = contains;

/*
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;


/**
 * 
 * unique: Designed to return an array of elements with the duplicate elements removed
 * 
 * @param {Array} array: collection to loop over to find duplicate elements
 * 
 * @return {Array}: The value returned will be the same as the input value with duplicates removed.
 * 
 */
 
 function unique(array) {
    
    var newArr = [];
    for (var i = 0; i < array.length; i ++) {
    if (indexOf(newArr, array[i]) === -1) {
        newArr.push(array[i]);
    }    
    } return newArr;
}

module.exports.unique = unique;

/**
 * 
 * filter:Designed to apply a given input function to elements of an array.
 * 
 * @param {Array} array: The input collection in which we loop over to apply the given input function.
 * @param {Function} func: Represents a given input function in which to apply to each element of the input array.
 * 
 * @return {Array}: Returns an array of elements for which applying the function returned true. 
 * 
 */
 
 function filter(array, func) {
 var newArray = [];
 for (let i = 0; i < array.length; i ++) {
      if(func(array[i], i, array) === true) {
       newArray.push(array[i]);   
      }
      
} return newArray;
}
module.exports.filter = filter;

/**
 * 
 * reject: Designed to return a new array of elements in which applying the function returns false.
 * 
 * @param {Array} array: The input collection in which to loop over and apply the input function
 * @param {Function} func: The input function in which to apply to elements of the input array.
 * 
 * @return {Array}: Returns a new array of elements in which applying the function returned false.
 * 
 */
 
 function reject(array, func) {
   var myArray = array.map(s => s);
   var newArray = filter(array, func);
   for (let i = 0; i < myArray.length; i++) {
       for (let j = 0; j < newArray.length; j++) {
           if(myArray[i] === newArray[j]) {
               myArray.splice(i, 1);
           }
       }
   }return myArray;
}
module.exports.reject = reject;


/**
 * 
 * partition: Designed to return an array with two sub arrays one for which applying the given input function returned truthy,
 * and the second for every element for which applying the input function return falsy.
 * 
 * @param {Array} array: Input collection in which to loop over and apply the given input function.
 * @param {Function} func: Input function in which to apply to the elements of the input array.
 * 
 * @return {Array}: Returns an array with two sub arrays one containing truthy values, and one containing falsy values.
 * 
 */
 
 function partition(array, func) {
    var totalArr = [];
    var trueArr = [];
    var falseArr = [];
    
    for(var i = 0; i < array.length; i++) {
        if (func(array[i], i, array) === true) {
            trueArr.push(array[i]);
        } else if (func(array[i], i, array) === false) {
            falseArr.push(array[i]);
        } 
    } totalArr.push(trueArr, falseArr); 
    return totalArr;
}
module.exports.partition = partition;


/**
 * 
 * map: Designed to determine if the given input collection is an object or array and apply the given input function.
 * Then stores the returned value in a new array.
 * 
 * @param {Array or Object} collection: The input collection in which we determine the type of collection and loop through it 
 * to apply the given inpiut function.
 * 
 * @param {Function} func: Input function in whch we apply to the given input collection.
 * 
 * @return {Array}: The returned value is a new array of results of the function call.
 * 
 */
 
function map(collection, func) {
    var myArr = [];
    if (Array.isArray(collection)) {
        for(var i = 0;  i < collection.length; i++) {
            myArr.push(func(collection[i], i, collection));
        }
    } else if (typeof(collection) === 'object') {
        for (var key in collection) {
            myArr.push(func(collection[key], key, collection));
        }
    } return myArr;
}
module.exports.map = map;

/**
 * 
 * pluck: Designed to return the value of property in a new array using map.
 * 
 * @param {Array} array: Collection in which we loop through to find the vlue of the input property.
 * @param {Object property} prop: The input property in which we will find the corresponding value.
 * 
 * @return [Array}: The returned value is an array representing the corresopnding value to the given input property.
 * 
 */
 
 function pluck(array, prop) {
    function myFun(a, b, c) {
        return a[prop];
    } return map(array, myFun);
}
module.exports.pluck = pluck;


/**
 * 
 * every: Designed to return a boolean based on the results of running a given input function.
 * 
 * @param {Array or Object} collection: We must first distinguish they type of collection and then run our given function on the input collection.
 * @param {Function} func: The input function in which we test the input collectoin. 
 * If no function parameter is given, we return true for every element that is truethy otherwise false.
 * 
 * @return {Boolean}: The value returned will be a Boolean based on the return result of running the function for the given collection.
 * 
 */
 
 function every(collection, func) {
    if (Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            if(func === undefined) {
                if(collection[i] == false) {
                    return false;
                } return true;
            }
            else if (func(collection[i], i, collection) === false) {
            return false;
            }
        }
    } else if (typeof(collection) === 'object') {
        for(var key in collection) {
            if (func ===undefined) {
                if(collection[key] == false) {
                    return false;
                } return true;
            }
           else if (func(collection[key], key, collection) === false) {
                return false;
            }
        }
    } return true;
}
module.exports.every = every;

/**
 * 
 * some: Designed to return a Boolean based on the resut of running an input function on a given collection.
 * 
 * #param {Array or Object} collection: The input collection in which we test the type of collectionn, and run a given input function on
 * the collection returning a Boolean.
 * @param {Function} func: The input function in which to test the given collection.
 * 
 * @return {Boolean}: The return value is a Boolean representing the result of running the function on a given input collection.
 * 
 */
 
 function some(collection, func) {
    if (Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            if(func === undefined) {
                if(collection[i] == true) {
                    return true;
                } return false;
            } else if (func(collection[i], i, collection) == true) {
                return true;
            }
            
        }
    }
 else if (typeof(collection) === 'object') {
    for (var key in collection) {
        if (func === undefined) {
            if (collection[key] == true) {
                return true;
            }
        } else if (func(collection[key], key, collection) == true) {
            return true;
        } 
    }
} return false;
}
module.exports.some = some;

/**
 * 
 * reduce: Designed to call a function for every element in an array.
 * 
 * @param {Array} array: Input collection in which we loop over and call the given input function.
 * @param {Function} func: INput function in which we call to test items in an array.
 * @param {Value} seed: Input value in which we use for the next iteration if result is undefined.
 * 
 * @return {Value}: The return value is the reuslt of running the input function on the input array.
 * 
 */
 
 function reduce(array, func, seed) {
var result;
for (var i =0; i < array.length; i++) {
    if (result !== undefined) {
        result = func(result, array[i], i);
    } else if (seed !== undefined) {
        result = func(seed, array[i], i); 
    } else {
        var seed = array[0];
    }
} return result;
}
module.exports.reduce = reduce;

/**
 * 
 * extend: Designed take as many object arguments as needed and copy all object properties to the first given input object.
 * 
 * @param {Object} object1; The object in which we copy other object properties in to.
 * @param {Object} ...object: Represents an infinate amount of in put objects in which we copy the properties into object1.
 * 
 * @return {Object}: The returned object is the original object with all other object properties copied in.
 * 
 */
 
 function extend(object1, ... object) {
   for (var i = 0; i < object.length; i++) {
        for (var key in object[i]) {
            object1[key] = object[i][key];
        }
    } return object1;
}
module.exports.extend = extend;