// Q1 find minimum and maximum element
Array.prototype.findMinimumAndMaximum = function () {
    
    let minimum = this[0]
    let maximum = this[0]


    if(this.length === 0){
        // return undefined;
        throw new Error('Array is empty')
    }

    for(let idx=0; idx<this.length; idx++){

        // finding minimum 
        if(minimum > this[idx]){
            minimum = this[idx];
        } 

        // find maximum
        if(maximum < this[idx]){
            maximum = this[idx]
        }
        
    }
    
    
    console.log(`Maximum element in this array is: ${maximum}`)
    console.log(`Minimum element in this array is: ${minimum}`)
    
}

//Q2 Reverse an array in-place.
Array.prototype.myReverse = function (){
    
    //  but with this code problem is it will not convert it in place
        // let newArr = []
        // for(let idx=this.length-1; idx >=0; idx--){
        //     newArr.push(this[idx])
        // }
        // return newArr;
    
// two pointer technique
    let left = 0;
    let right = this.length-1

    while (left < right) {
        
        let temp = this[left];

        this[left] = this[right];
        this[right] = temp;

        left++;
        right--;
    }

}

//Q3 Find the sum of all elements in an array.
// implimenting aggregate function for sum of array 
Array.prototype.sum = function (){

    let sum = 0;

    for (const item of this) {

        sum += item;
        
    }

    if(sum == 0 ){
        return -1;
    }else{
        return sum;
    }
    
}

// Q4 find even number from filter method 
const nums = [1, 2, 20, 4, 5, 6];
const even = nums.filter((element, index, array) =>{

    if(element%2==0){
        return element
    }
})

console.log(even)

//  these are commmon difference between map and filter
const maps = nums.map((element, index, array) =>{
    
    if(element%2===0){
        return element*2
    }
    return element
})
console.log(maps)



// Q5 Remove falsy values
const data = [0, 1, false, 2, "", 3, null, undefined];
// const denseArr = data.filter(Boolean)
const denseArr = data.filter(element => element)
console.log(denseArr)

//Q6 Filter adults (age ≥ 18)
const users = [
  { name: "A", age: 16 },
  { name: "B", age: 21 },
  { name: "C", age: 18 }
];

const adults = users.filter(element => element.age >= 18)
console.log(adults)


//Q7 Filter products in stock
const products = [
  { name: "Phone", inStock: true },
  { name: "Laptop", inStock: false },
  { name: "Tablet", inStock: true }
];

const availableProducts = products.filter(item => item.inStock)
console.log(availableProducts)

//Q8 Filter unique values - pending 
const numss = [1, 2, 2, 3, 4, 4, 5];
const set = numss.filter((item) =>{

    if(item !== numss[item+1])
        return item
})
console.log(set)


// Q9 Filter words longer than 4 characters
const words = ["apple", "cat", "banana", "dog", "grapes"];
const word = words.filter((item) =>{
    if(item.length >= 4){
        return item
    }
})

console.log(word)



// Expected output:
// [1, 2, 3, 4, 5]
// Count how many even and odd numbers are in an array.

// Find the second largest element in an array.

// Check if an array is sorted or not.

// Rotate an array by 1 position to the right.

// Print all duplicate elements in an array.

// Replace each element with the sum of all other elements.

// Copy one array into another.
// Find the frequency of each element.

// Move all zeros to the end without changing order.

// Find the missing number in an array of size n (1 to n).

// Find the intersection of two arrays.

// Find the union of two arrays.

// Kadane’s Algorithm – Maximum subarray sum.

// Sort an array of 0s, 1s, and 2s (Dutch National Flag).

// Find all pairs with a given sum.

// Find the majority element (appears more than n/2 times).

// Left rotate array by k positions.
// Find the longest subarray with sum = k.

// Maximum product subarray.

// Trapping Rain Water problem.

// Best time to buy and sell stock (1 transaction).

// Best time to buy and sell stock (multiple transactions).

// Find duplicate number in array without modifying array.

// Find all leaders in an array.

// Merge two sorted arrays without extra space.

// Subarray with 0 sum exists or not.

// Count inversions in an array.