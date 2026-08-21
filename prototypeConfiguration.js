let obj = {

    name: 'abhinav',
    age: 56,
    greet (value){

        console.log(this)
    }
}

Object.defineProperty(obj, "name",{
    value: 'zeewansh',
    writable: false,
    enumerable: true,    // won't show up in Object.keys/for-in
  configurable: true
})
// console.log(Object.getOwnPropertyDescriptor(obj, "name"))
obj.name = 'user'
obj.greet()

function createPersonPrototype(){

    return {

        intro: function(){
            console.log(this)
        },
        greet: function(){
            console.log('hello')
        }
    }
}

let personPrototype = createPersonPrototype()

let person1 =  Object.create(personPrototype)
let person2  = Object.create(personPrototype)



person1.name = 'abhinav'
person2.name = 'userAdmin'

console.log(person1.greet === person2.greet)

