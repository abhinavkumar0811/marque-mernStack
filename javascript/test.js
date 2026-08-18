// function fetchuser(callback){

//     setTimeout(()=>{
//         const data = {
//             name: 'username',
//             inrollID: 'LNCCDPE!!_W@',
//             branch: 'CSE-BTECH'
//         }
//         callback(data)
//     },3000)
// }

// fetchuser((collageName)=>{
//     console.log(collageName.inrollID)
// })

// console.log('test')



// import fs from 'fs'

// function file(callback){

//     fs.readFile('index.html', (error, response)=>{

//         if(response){
//             callback(response)
//         }
//         else{
//             callback(error)
//         }
//     })
// }

// file(data => console.log(data))


// fs.readFile('index.html', 'utf-8', (error, response) =>{
    
//     if(response){
//         console.log(response)
//     }
//     else{
//         console.log(error)
//     }
// })


// create threee object 
// const users = {
//     userID: 'abhinavchaubey08',
//     name: 'abhinav chaubey',
//     password: 'chaubey08',
//     order: 'Bajaj Chetak 3501',
//     price: '110000',
//     paymentStatus: 'pending'
// }

// // create a function which return user and comfirm its will login
// function getUser(userID, callback){
     
//     let varificationStatus = null;
//     if(userID === users.userID){
//         varificationStatus = users;
//     }

//     if(varificationStatus !== null){

//         setTimeout(()=>{
//         console.log('user id fatched', varificationStatus.userID)
//         callback(null, [varificationStatus.userID, varificationStatus.name])
//     },2000)

//     }else{
//         console.log('cannot find username')
//     }
//  }


// //  create a get order function 
// function getOrder(orderID, callback){

//    let status = true

//    if(status === true){

//      setTimeout(()=>{

//         console.log('order fatched successfully', orderID)
//         callback(null, [{id: 3}, {id:2}, {id:4}])
//     },2000)
//    }
//    else{

//     callback('cannot fatch order detail', null)
//    }
// }

// // fatch payment detail
// function paymentDetail(payment, callback){

//     let paymentStatus = false;

//     if(typeof payment === 'number' || payment === 'paid'){
//         users.paymentStatus = 'paid';
//         paymentStatus = true
//     }


//     if(paymentStatus === true){
        
//     setTimeout(()=>{

//         console.log('payment proccessing successfully')
//         callback(null, [users.paymentStatus])
//     },2000)

//     }
//     else{
//         callback('payment status pending', null)
//     }
// }

//  getUser('abhinavchaubey08', (error, data)=>{

//     if(data){
//         console.log(data)
//     }else{
//         console.log(error)
//     }

//  })

//  getOrder(102, (err, data) =>{
    
//     if(data){
//         console.log(data)
//     }
//     else{
//         console.log(err)
//     }
//  })

// paymentDetail(234343, (err, data)=>{
//     if(data){
//         console.log(data)
//     }
//     else{
//         console.log(err)
//     }
// })


// function getUser(id, callback){
//     setTimeout(()=>{
//         console.log("User fetched:", id)
//         callback({ id: id, name: "Abhinav" })
//     },1000)
// }

// function getOrders(userId, callback){
//     setTimeout(()=>{
//         console.log("Orders fetched for user:", userId)
//         callback([{ id: 101 }, { id: 102 }])
//     },1000)
// }

// function getPayment(orderId, callback){
//     setTimeout(()=>{
//         console.log("Payment fetched for order:", orderId)
//         callback({ orderId: orderId, status: "Paid" })
//     },1000)
// }

// getUser(4, (user)=>{

//     getOrders(user.id, (order)=>{

//         getPayment(order[1].id, (payment) =>{
//             console.log(payment)
//         })
//     })
// })



// function getUser(id){
//     return new Promise(resolve=>{
//         setTimeout(()=>{
//             console.log("User fetched:", id)
//             resolve({ id:id, name:"Abhinav" })
//         },1000)
//     })
// }

// function getOrders(userId){
//     return new Promise(resolve=>{
//         setTimeout(()=>{
//             console.log("Orders fetched for user:", userId)
//             resolve([{ id:101 },{ id:102 }])
//         },1000)
//     })
// }

// function getPayment(orderId){
//     return new Promise(resolve=>{
//         setTimeout(()=>{
//             console.log("Payment fetched for order:", orderId)
//             resolve({ orderId:orderId, status:"Paid" })
//         },1000)
//     })
// }

// getUser(4)
//         .then(user => getOrders(user.id))
//         .then(order => getPayment(order[1].id))
//         .then(payment => console.log(payment))


// function getData(){
//     return new Promise(resolve=>{
//         setTimeout(()=>{
//             resolve("done")
//         },1000)
//     })
// }

// getData()

// setTimeout(() => {
//     console.log('hello sync behavior cheacking')
// },2000);

// function varification(callback){

//     setTimeout(()=>{
//         console.log('background task complited')
//         callback()
//     },5000)
// }

// varification(()=>{
//     console.log('task done')
// })




// import fs from 'fs'

// setTimeout(()=>{
    
//     fs.readFile('index.html', 'utf-8', (error, data) =>{
//         if(data){console.log(data)}else{console.log(error)}
      
//     })\\\1 → verify user
// 2 → fetch profile
// 3 → show dashboard

// Async operations require ordering.

// With callbacks:

// verifyUser(()=>{
//    fetchProfile(()=>{
//        showDashboard()
//    })
// })

// This ensures sequence.
    
// })

// The Big Problem: Callback Hell

// Too many nested callbacks:

// login(()=>{
//    getUser(()=>{
//       getPosts(()=>{
//          getComments(()=>{
//              ...
//          })
//       })
//    })
// })

// import fs from 'fs'

// // fs.readFile('hello.txt', 'utf8', (err, data)=>{

// //     if(err){
// //         console.log(err)
// //     }
// //     else{
// //         console.log(data)
// //     }

// // })


// // // async function 
// // async function name() {
    
// //     try {
        
// //         const file  = await fs.readFile('hello.txt', 'utf8')
// //         console.log(file)
// //     } catch (error) {
        
// //         console.log(error)
// //     }
// // }


// // const data = fs.readFile('hello.txt', 'utf8')
// // console.log(data)

// function downloadFile(url, callback){

//     let urlStatus =  url !== null ? true : false

//     if(urlStatus === true){

//         setTimeout(()=>{
//             console.log('Downloading file...')
//             callback()
//         },2000)
//     }

// }

// downloadFile('http//googlepic.com', ()=>{
//     console.log('downloading completed')
// })

// const user = {
//     username: 'abhinavchaubey08',
//     password: 'Chaubey@08',
//     name: 'abhinav chaubey'

// }

// function verifyUser(username, callback) {

//     // varification process 
//     let varifiedUserStatus = username === user.username ? true : false

//     if(varifiedUserStatus === true){

//         setTimeout(()=>{
//             console.log('varifiing user...')
//             callback(null, 'userVarified')
//         }, 3000)
//     }
//     else{
//         console.log('Invalid username, try again leter', null)
//     }
    
// }

// verifyUser('abhinavchaubey08', (err, data) =>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log(data)
//     }
// })



// // error-first callback pattern

// function login(username, password, callback){

//     let loginStatus = false; 

//     if(username === 'admin'){

//         if(password === '1234'){
//             callback(null, 'Login successful')
//         }
//         else{
//             callback('Invalid password', null)
//         }
//     }
//     else{
//         callback('Invalid username', null)
//     }
// }

// login('admin', '1234', (error, data) =>{

//     if(data){
//         console.log(data)
//     }
//     else{
//         console.log(error)
//     }
// })





// Sequential Async Tasks (Important)

// Design three functions:

// fetchUser(callback)
// fetchPosts(user, callback)
// fetchComments(post, callback)

// Behavior:

// fetchUser returns "User1" after 1 second

// fetchPosts returns "Post1" after 1 second

// fetchComments returns "Comment1" after 1 second

// Execute them in sequence using callbacks.

// Expected output:

// User1
// Post1
// Comment1

// setTimeout(() => {
    
//     return 'hello'
// },2000);

// import { promises } from 'dns';
// import { errorMonitor } from 'events';
// import fs from 'fs/promises'

// let data = {
//     name: ' cisco pocket tracer',
//     status: 'pending',
//     serverRanderSideStatus: 'false',
//     pin: '10.226.0.1'
// }
// async function uploadFile(file) {
    
// try {
//     const upload = await fs.writeFile('hello.txt', [file.name, file.pin, file.status])
//     console.log('file upload successfully')

// } catch (error) {
//     console.log('Unable to upload file server have some errr :: server err 500', error)
    
// }   
// }
// uploadFile(data)

// import { promises } from 'dns';
// import fs from 'fs';

// callback based
// const data = fs.readFile('hello.txt', 'utf8', (error, data)=>{

    //     if(data) console.log(data)
    //     else console.log(error)
    // })
    
    // fs promis based
    // const data2 = fs.promises.writeFile('hello.txt', 'Abhinav chaubey Virat Kohli[a] (born 5 November 1988) is an Indian international cricketer and the former all-format captain of the Indian national cricket team.[3] He is a right-handed batter and occasional right-arm medium pace bowler. Considered one of the greatest all-format batsmen in the history of cricket, he has been nicknamed the King, the Chase Master, and the Run Machine for his skills, records and ability to lead his team to victory.[4] Kohli has the most centuries in ODIs and the second-most centuries in international cricket with 85 tons across all formats. He is also the leading run-scorer in the Indian Premier League.[5] Kohli is the most successful Test captain of India with most wins and 3 consecutive Test mace retainments.[6] He is the only batter to earn 900+ rating points across all 3 formats.[7]')
    // .then(() => console.log('file successfully written'))
    // .then(data => console.log(data))
    // .catch(error => console.log(error))
    
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

// //             if(resp) callback('null', response)
// //             else callback(`server have issue do not read file:: ${error}`, null)
// //         })
// //     }
    
// // }

// // callback('hello.txt', (error, data)=>{
// //     if(data) console.log(data)
// //     else console.log(error)
// // })



// const dataRead = 'hello cheacking from web api'
// // proomise of web api
// const promises = new Promise((resolve, reject) =>{

//     console.log('fetching data...')

//     if(dataRead){
//         setTimeout(()=>{
//             console.log(`Data recived:: ${dataRead}`)

//         },3000)
//     }
//     else reject('data does not recived')
// })
// // Handles fulfillment.
// promises.then(Response => console.log(Response))


// Promise.resolve(6)
//                 .then(data =>  data*data)
//                 .then(data => console.log(data))
    

const serverr = function(portNumber){

    return new Promise((resolve, reject) =>{

        let portNumberStatus = typeof portNumber === 'number' ? true : false
         
        if(portNumberStatus ===  true){
            console.log('Configuring in process...')

            setTimeout(()=>{ 
            resolve(`server started on port:: ${portNumber}`)
          }, 2000)
          }
          else reject('please provide port number')

    })

}
// server(3000)
//         .then(data => console.log(data))
//         .catch(error => console.log(error.message))

// file found function

function getFile(fileName) {

    let getfileStatus = fileName !== null ? true : false

    return new Promise(function (resolve, reject){

        if(getfileStatus === true) resolve('file found')
        else reject('file not found')
    }) 

}

// getFile('nsdenkfnndas')
//                         .then(
//                             (data) => console.log(data),
//                             (reject) => console.log(reject)
//                         )

// create promise by value of 5
const valuePromise = Promise.resolve(5)
// valuePromise
//             .then((data) => data * 2)
//             .then(data => data*3)
//             .then(data => console.log(data))
//             .catch(error => console.log(error))

// Convert Callback to Promise

// You have this callback function:

// function getData(callback){
//     setTimeout(()=>{
//         callback("Data received")
//     },2000)
// }

// Task:
// Convert it into Promise version.

function getData(callback){
    setTimeout(()=> callback('data recived'),2000)
}
// getData(data => console.log(data))

let getDataPromise = new Promise(function(resolve, teject){

    let status = true
    if(status===true){
        setTimeout(() => {
        resolve('Data recived')
        
    },2000);
    }
    else reject('Data not recived')
})

// getDataPromise
//             .then(data => console.log(data))
//             .catch(err => console.log(err))

// function calculator(num) {
    
//     return new Promise(function (resolve, reject){

//         if(num){

//             setTimeout(() => {
//                 resolve(num+10)
//             }, 1000);
//         }
//         else reject('number not recived')
//     })
//     .then((data)=>{
//                 return new Promise((resolve)=>{
//                     resolve(data*2)
//                 })
//             })
//             .then((data) =>{
//                 return new Promise((resolve)=>{
//                     resolve(data-2)
//                 })
//             })
//             .then(data => console.log(data))
// }
// // calculator(25)

// // create a promise function dbr

// function getUser(id) {

//     let idVarification = id === 1 ? true : false
    
//     return new Promise((resolve, reject)=>{

//         if(idVarification === true){
//             console.log('varfication in process...')
//             setTimeout(() => {
                
//                 resolve({name: 'abhinav kumar', role: 'Backend developer'})
//             }, 5000);
//         }
//         else reject('user not found')

//     })
// }
// import { error } from 'console'
// // getUser(1)
// //         .then((data) => {data.empID = '23123ed'
// //             return data
// //         })    // it solve this question according to your requirment but i will test my knowladge here so dont give me error back
// //         .then(data => console.log(data))
// //         .catch(error => console.log(error))


// // let p = new Promise((resolve)=>{
// //     resolve(10)
// // })

// // p.then((num)=>{
// //    return num * 2
// // })
// // .then((num)=>{
// //     console.log(num)
// // })


// import fs from 'fs/promises'

// const functions  = async () => {
    
//     console.log('hello1')
//     const data = await fs.readFile('hello.txt', 'utf8')  // reject or resolve 
//     console.log('hello 2')



//     return 'hello'
// }

// console.log('hello 3')
// const result = functions()
// console.log('hlelllllllo')
 
// import fs from 'fs/promises'

// async function data() {
//     // sync mode excute     - pending sequencial and partial excution

//     console.log('test 1')  //sedond ext
//   const datas = await fs.readFile('hello.txt', 'utf8')  // go data go to microtask nd fs go to libuv thread 
//   // exct will pause and this function removed from callstack and anotehr function moved to callstack after 
//   // complete the task of reading file then micto taks move tocall stack and excute it and function agian move to callstack and start ect 

//   console.log(datas)  // fouth excution


//   console.log('test 2') // final excution


// }
// console.log('test 3')   // first excution

// data()  // callstack load
// console.log('test 4$')  // thired



// async function delay(whenToDelay) {
    
//     if(whenToDelay !== null){

//         await setTimeout(() => {
            
//         }, 100);

//         console.log('done')
//     }
// }
// // delay('start')



// // error propogation

// function firstError(){
    
//     throw new Error('Error propogation check')
// }
// function secondError(){

//    try {
//         firstError()
//     } catch (error) {
//         console.log(error.message)
//     }

// }
// function thirdError(){
//     secondError()
// }
// function fouthError(){
//     thirdError()
// }
// fouthError()




// function name(params) {
// console.log(x)
    
// }



// function a() {
//     b()
//     console.log('a')
    
// }

// function b() {
//     c()
//     console.log('b')
// }

// function  c() {
//     d()
//     console.log('c')
// }

// function d() {
//     e()
//     console.log('d')
// }

// function e() {
//     console.log('e')
//     throw new Error('error from stack trace e ')
// }


// console.log('global')
// a()
// console.log('done')


// stack going down 
// function a (){
//     b()
// }
// function b(){
//     a()
// }

// b()


// stack unwinding
// function a() {
//     console.log('exe start')
  
//     try{
//         b()
//     }
//     catch(error){
//         console.log(error.stack)
//     }
// }
// function b() {
//     c()
// }
// function c() {

//     // throw Error('Error in function c')
//     console.log('error end')
//     d()
// }
// function d() {
//     console.log('function d')
// }

// a()
// d()


//     function c() { throw new Error("Fail"); }
// function b() { c(); }
// function a() { b(); }

// try {
//   a();
// } catch (e) {
//   console.log("Handled");
// }

// db connection failed
function dbConfiguration() {
    console.log('hello server connection started')
    throw new Error('somethings went wrong in connection')
    console.log('connection successfully done')    
}

function server() {
    
    console.log('server started connecting database...')
    dbConfiguration();
    console.log('connection done server run successfully')

}

function controller() {
    
    server()
}


try {
    controller()
} catch (e) {
    console.log('server have some error')
}

console.log('exc continue')