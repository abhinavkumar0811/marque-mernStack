// //  transpose  matrix
// let mat =[[1, 2, 3, 4],
//                 [5, 6, 7, 8],
//                 [9, 10, 11, 12],
//                 [13, 14, 15,16]]

//     let top=0;
//     let buttom = mat.length-1;
    
//     // console.log(buttom)
//     let left = 0;
//     let right = mat[0].length-1;
//     let buttomRight = mat[mat.length-1].length-1
    
//     let boundrymat = []
    
//     // move top left to right 
//     for(let mov=left; mov<=right; mov++){
    
//         boundrymat.push(mat[top][mov])
        
//     }
    
//     // // move rigth top to buttom
//     for(let mov=top+1; mov<=buttom; mov++){
//         boundrymat.push(mat[mov][mat[mov].length-1])
//     }


//     // // move buttom right to left
//     for(let mov=buttomRight-1; mov>=left; mov--){
//         boundrymat.push(mat[buttom][mov])
//     }
    
//     // // move buttom to top
//     for(let mov=buttom-1; mov>top; mov--){
//         boundrymat.push(mat[mov][0])
//     }


// console.log(boundrymat)


// transvrsal 
let arr = [1, 2, 3, 7, 5];
let target = 12;
let targets = [];

for(let idx=0; idx<arr.length; idx++){

    // return the first index  from left most 
    // return the last index  from right most 
    // transverse  comfit happaning 
    // searching the element 

    
}

console.log(targets)