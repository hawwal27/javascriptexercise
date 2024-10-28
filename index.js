
let name ='Hawwal';
let age =30;
let isApproved= true;
let firstName =undefined;
let selectedColor=null;
let person ={
    name: 'hawwal',
    age:30
};
person.name = 'ijaola';
let selection ='name';
person[selection] ='mary';

console.log(person.name)
let selectedColors =['red','blue'];
selectedColors[2]='1';
console.log(selectedColors[0])
function greet(name, lastName){
    console.log('hello' + name+ ''+ lastName);
}

function square(number){
    return number*number;
}
greet('hawwal', 'ijaola');
console.log (square(2));
