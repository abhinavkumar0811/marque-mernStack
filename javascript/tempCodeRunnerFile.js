
//     // function getData(data){
        
//     //     return new Promise((resolve, reject)=>{
        
//         //         if(data){
// //         setTimeout(() => {
    
//     //             console.log('data', data)
// //             resolve('promiss successfully done')
// //         }, 5000);

// //         }else{
//     //             reject('data not recived')
//     //         }
    
//     //     })
// // }

// // console.log('getting data one')
// // getData(2).then((data) =>{
    
//     //     console.log(data)
    
//     //     console.log('gettting data two')
    
//     //     getData(3).then((data)=>{
//         //         console.log(data)

//         //         console.log('testing another bun tool')
//         //         getData(121).then(msg => console.log(msg))
//         //     })
//         // }).catch(err => console.log(err))
        
//         // import promissFs from 'fs/promises';
//         // import fs from 'fs';
        
//         // const consumePromise = function(data){
            
//         //  return new Promise((resolve, reject)=>{
//             //        console.log('data fetching...')
            
//             //     if(data){
                
//             //     setTimeout(() => {
//                 //        console.log('data', data)
//                 //        resolve('successfull')
//                 //     }, 2000);
// //     }
// //     else{
//     //         reject('data not recived')
// //     }

// //  })
// // }


// // consumePromise().then(msg => console.log('successfully compiled::', msg)).catch(error => console.log(error))

// import promissBasedFs from 'fs';
// // const data = promissBasedFs.promises.readFile('hello.txt', 'utf8')
// // .then((msg => console.log(msg)))
// // .catch(error => console.log(error))

// // function readData(fileName) {

// //     return new Promise((resolve, reject) =>{

// //         const data = promissBasedFs.readFile(fileName, 'utf8', (err, data)=>{

// //             if(data) resolve(data)
// //             else reject('promiss did not accpt file name')

// //         })
// //     })
    
// // }

// // readData('hello.txt')
// //                 .then(msg => console.log(msg))
// //                 .catch(errr => console.log(errr))


// // now i will make it will the callback 

// function callback(filename, callback) {

//     let fileNameStatus = typeof filename === 'string' ? true : false;

//     if(fileNameStatus === true){

//         const data = promissBasedFs.readFile(filename, 'utf8', (error, response) =>{

//             if(resp) callback('null', response)
//             else callback(`server have issue do not read file:: ${error}`, null)
//         })
//     }
    
// }

// callback('hello.txt', (error, data)=>{
//     if(data) console.log(data)
//     else console.log(error)
// })

