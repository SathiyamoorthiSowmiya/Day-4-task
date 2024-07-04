//!1.Do the below programs in anonymous function:
//a.Print odd numbers in an array:

var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var b = function () {
  var c = [];
  for (var i = 0; i < a.length; i++) {
    if (a[i] % 2 != 0) {
      c.push(a[i]);
    }
  }

  console.log(c);
};
b();

//b.Convert all the strings to title caps in a string array:

a = function (str) {
  var res = str.toLowerCase().split(" ");
  for (var i = 0; i < res.length; i++) {
    res[i] = res[i][0].toUpperCase() + res[i].slice(1);
  }
  console.log(res.join(" "));
  return res;
};
a("my favourite place is kerala");

//c.Sum of all numbers in an array

a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
b = function () {
  var sum = 0;
  for (var i = 0; i < a.length; i++) {
    sum = sum + a[i];
  }
  return sum;
};
console.log(b());

//d.Return all the prime numbers in an array

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let primeNumbers = array.filter(function (element) {
  if (element <= 1) 
    return false; 
  for (let i = 2; i <= Math.sqrt(element); i++) {
    if (element % i === 0) {
      return false;
    }
  }
  return true;
});
console.log(primeNumbers);

//e.Return all the palindromes in an array

let arr = ["madam", "hello","data", "level", "world","car", "racecar", "radar"];
let palindromes = arr.filter(function (element) {
  let str = element.toLowerCase();
  return str === str.split("").reverse().join("");
});
console.log(palindromes);

//f.Return median of two sorted arrays of the same size

let findMedianSortedArrays = function(nums1, nums2) {
    let mergedArray = [...nums1, ...nums2].sort((a, b) => a - b);
    let length = mergedArray.length;
    let mid = Math.floor(length / 2);
    if (length % 2 === 0) {

        return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
    } 
    else 
    {   
        return mergedArray[mid];
    }
};
let nums1 = [1, 3, 5];
let nums2 = [2, 4, 6];
console.log(findMedianSortedArrays(nums1, nums2));

//g.Remove duplicates from an array

let array1 = [1, 2, 2, 3, 4, 4, 5];
let uniqueArray = function(arr) {
    return arr.filter(function(item, index) 
    {
        return arr.indexOf(item) === index;
    });
}(array1);

console.log(uniqueArray);

//h.Rotate an array by k times

let array2 = [1, 2, 3, 4, 5];
let k = 3; 
let rotatedArray = function(arr, k) {
    k = k % arr.length;
    return arr.slice(-k).concat(arr.slice(0, arr.length - k));
}(array2, k);
console.log(rotatedArray); 


//!Do the below programs in IIFE function:
//a.Print odd numbers in an array

let request = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let oddNumberArray = (function(arr) {
    let oddNumbers = [];
    arr.forEach(function(element) {
        if (element % 2 !== 0) {
            oddNumbers.push(element);
        }
    });
    return oddNumbers;
})(request);

console.log(oddNumberArray);

//b.Convert all the strings to title caps in a string array

let stringArray = ["hello world", "good morning", "have a nice day"];
let titleCapsArray = (function(arr) {
    let capitalize = function(word) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    };

    return arr.map(function(str) {
        return str.split(' ').map(capitalize).join(' ');
    });
})(stringArray);

console.log(titleCapsArray); 

//c.Convert all the strings to title caps in a string array

let car = [1, 2, 3, 4, 5];
let sum = (function(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
})(car);
console.log(sum); 

//d.Return all the prime numbers in an array


let response = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let primeNumber = (function(arr) {
    let isPrime = function(num) {
        if (num <= 1) {
            return false;
        }
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    };

    return arr.filter(function(element) {
        return isPrime(element);
    });
})(response);

console.log(primeNumber);

//e.Return all the palindromes in an array

let repeat = ["madam", "hello", "level", "world", "racecar", "radar"];

(function(arr) {
    let palindromes = arr.filter(function(element) {
        let str = element.toLowerCase();
        return str === str.split('').reverse().join('');
    });
    
    console.log(palindromes);
})(repeat);

//f.Return median of two sorted arrays of the same size.

let num1 = [1, 3, 5];
let num2 = [2, 4, 6];

let median = (function(arr1, arr2) {
    let mergedArray = arr1.concat(arr2).sort((a, b) => a - b);
    let length = mergedArray.length;
    let mid = Math.floor(length / 2);
    
    if (length % 2 === 0) {
        return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
    } else {
        return mergedArray[mid];
    }
})(num1, num2);

console.log(median);

//g.Remove duplicates from an array

let duplicates = [1, 2, 2, 3, 4, 4, 5];

let uniqueArr = (function(arr) {
    return arr.filter(function(item, index) {
        return arr.indexOf(item) === index;
    });
})(duplicates);

console.log(uniqueArr);

//h.Rotate an array by k times

let rotatedArrays = [1, 2, 3, 4, 5];
let n= 3;

let rotations = (function(arr, rotations) {
    rotations = rotations % arr.length;
    return arr.slice(-rotations).concat(arr.slice(0, arr.length - rotations));
})(array, k);

console.log(rotatedArray);

//!2.Do the below programs in arrow functions.
//a.Print odd numbers in an array

let array5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const getOddNumbers = (arr) => {
    return arr.filter(element => element % 2 !== 0);
};

let oddNumbersArray = getOddNumbers(array5);
console.log(oddNumbersArray);

//b.Convert all the strings to title caps in a string array

let string = ["hello" , "world", "morning"];
const convertToTitleCaps = (arr) => {
    return arr.map((str) => {
        return str.split(' ').map((word) => {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }).join(' ');
    });
};
let titleCapArray = convertToTitleCaps(string);
console.log(titleCapArray);

//c.Sum of all numbers in an array

let sumarr = [1, 2, 3, 4, 5];
const sumOfNumbers = arr => arr.reduce((acc, current) => acc + current, 0);
let sum1 = sumOfNumbers(sumarr);
console.log(sum1); 

//d.Return all the prime numbers in an array

let arrays = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const isPrime = num => {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false; 
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
};
const getPrimeNumbers = arr => arr.filter(num => isPrime(num));
let primeNumbersArray = getPrimeNumbers(arrays);
console.log(primeNumbersArray);

//e.Return all the palindromes in an array

let array8 = ["madam", "hello", "level", "radar", "world"];
const isPalindrome = str => {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
};
const getPalindromes = arr => arr.filter(str => isPalindrome(str));
let palindromeArray = getPalindromes(array8);
console.log(palindromeArray); 




