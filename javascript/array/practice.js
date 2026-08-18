const obj  = {
    name: 'user@',
    collage: 'data',
    greet: function(){
        console.log(this.name)
    }
}

obj.greet()

Object.prototype.displayInfo = function(name){
    console.log(this.name)
}

obj.displayInfo()

const studentDetail =  {
    name: 'abhinav chaubey',
    branch: 'CSE-9',
    InrollmentNo: 25030310357180,
    course: 'Btech',
    collage: 'parul insitute of technology' 
}

studentDetail.displayInfo()

// destructring
const collectionfunc = function ({InrollmentNo, course, branch, name}){
    console.log([InrollmentNo, branch, course, name])
}

collectionfunc(studentDetail)

let data = ['ironman', 'antman', 'moneyman', 'redmiman']

const dataRetrival = function ([...dataCollection]) {
    
    secondEl = dataCollection.slice(1, 2);
    lastEl = dataCollection.slice(-1);
    moneyMan = dataCollection.slice(-2);

    return [secondEl, lastEl, moneyMan]

}

const result = dataRetrival(data)
console.log(result)

let [first, second] = data
console.log(second)
console.log(data)

// this is array destructring 
const [x=10] = data
console.log(x)