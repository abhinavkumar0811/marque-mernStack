//Q1 Print the first and last character of a string.

//Q2 Check if the first character of a string is uppercase.
let str = "JavaScript";
console.log(str[0])
console.log(str.slice(-1))
// console.log(str[str.length-1])
console.log(str[0]===str[0].toUpperCase()? true:false)


//Q3 Find the first and last occurrence of "a" in "banana".
let fruit = 'banana'
let first_occurance = fruit.indexOf('a')
let lastOccurance = fruit.lastIndexOf('a')

console.log(`first occurance index of a is: ${first_occurance}`)
console.log(`last occurance index of a is: ${lastOccurance}`)

//Q4 Check if "world" exists in a string, case-insensitive.
let program = 'hello world!'
let check = program.toUpperCase().includes('HELLO')
console.log(check=== false ? 'Not present' : 'Present')


//Q5 Given a string, check if it starts with "Hello" and ends with "!".
let start  = program.startsWith('Hello')
let end = program.endsWith('!')
console.log(start === true? 'program start with Hello': 'program not start with Hello')
console.log(end === true ? 'program end with !': 'program not end with !')


//Q6 Extract "Script" from "JavaScript" using slice(), substring(), and substr().
let word  = 'javaScript'
let sclice = word.slice(-6)
let subString = word.substring(4)
let subStr = word.substr(4)

console.log(`With slice:  ${sclice}`)
console.log(`With subString: ${subString}`)
console.log(`With subStr: ${subStr}`)

//Q7 Extract the last 5 characters of a string using any method.
let extract = word.slice(-5)
console.log(`This are the last five extracted word: ${extract}`)


//Q8 Extract the string between the first and second space in "Hello world from JS".
let sentence = 'Hello world from JS'
let firstSpace = sentence.indexOf(' ')
let secondSpace = sentence.indexOf(" ", firstSpace+1)
let extractSpaceWord = sentence.slice(firstSpace, secondSpace)
console.log(extractSpaceWord !== " " ? extractSpaceWord : 'Not found')



//Q9 Concatenate three strings "Hello", "World", "JS" with spaces in between.
let concate = 'Hello ' + 'World ' + "JS"
console.log(concate)

//Q10 Given an array of words ["I", "love", "JS"], convert it to a single string with hyphens.
let diff = ['I', 'Love', 'JS']
let combine = diff.join('-')
console.log(combine)


//Q11 Convert "javaScript" to all uppercase.
console.log(concate.toUpperCase())

//Q12 Capitalize the first character of "hello" and make the rest lowercase.
let brand = 'tata'
let title = brand[0].toUpperCase() + brand.slice(1)
console.log(title)

//Q13 Toggle the case of every character in a string (uppercase → lowercase, lowercase → uppercase).

// let zigZag = 'HelLo WoRlD Boy'
// let result = ''

// for (let char of zigZag){

//     if(char.toUpperCase()){
//         result +=char.toLowerCase()
//     }

    
// }

// console.log(result)


// Remove all leading and trailing spaces from " Hello World " using trim.
let words = ' Hello world '
console.log(words.trim())


// Remove all spaces from a string " J a v a S c r i p t ". 
let space  = ' j a v a s c r i p t '
let spacereplace = space.replace(/\s+/g, '')  // doubt
console.log(spacereplace)

// Replace "World" with "JS" in "Hello World" using replace().
let wordReplace = words.replace('world', 'JS')
console.log(wordReplace)


// Replace all occurrences of "cat" with "dog" in "cat and cat" using replaceAll().
let animal = 'dog cat dog cat dog cat'
let dogReplace = animal.replaceAll('dog','cat') && animal.replace('cat', 'dog')  
console.log(dogReplace)

// Replace all vowels in a string with "*" using regex.

// Split "I-love-JS" into an array using the - separator.


// Join an array ["Java", "Script"] into "JavaScript" using join().



// Count the number of words in a string "Hello world from JavaScript".


// Reverse a string "JavaScript" without using built-in reverse().


// Check if a string is a palindrome (e.g., "madam" → true, "hello" → false).


// Remove all non-alphanumeric characters from "Hello, World! 123" using regex.


// Find the most frequent character in a string.

// Capitalize the first letter of every word in a sentence.


// Given a sentence, replace all spaces with underscores and convert to uppercase.