let myAnyDatatypeVariable:any='Hi'||4 || false
//Primitive Datatypes
let myString:string='Hi' //String Datatype
let myNumber:number=30 //Number Datatype
let myBoolean:boolean=true //boolean Datatype
let myDate:Date=new Date() //Date Datatype
let myUnusableVar:void= undefined //Only Undefined can be assigned
let multiDtypeVar:String|number= 'Hi' //Union type
//Literal type
let myLiteral: "Vimal"|"Roy"
myLiteral="Vimal"

//Non Primitive Datatypes
let myArray:number[]=[1,2,3] //Array of type number
let myArray2:(number|string)[]=["1",2,5]
let myTuple:[string,number]=["Street",9] //Tuples

//Aliases(Can be used for primitives & objects)
type personalInfo={
    name:string,
    age: number,
    address:string
}

let personalObj:personalInfo={
    name:"Vimal Roy",
    age:23,
    address:"Where i live"
}

//Interfaces(Used for objects  & can be extended like a class)

//interface for objects with properties
interface personalDetails{
name:string,
age?:number,
dob?:Date
}
interface allDetails extends personalDetails{
    score:number,
    remarks?:string //question mark to make a property optional
}

let obj3:allDetails={
    name:"Vimal",
    score:223
}

//interface for objects with functions as properties
interface checkFn{
    sayHi:(text:string)=>string
    showMyNo(num:number):number
}
let checkFnObj:checkFn={
    sayHi:text=> `Hi ${text}`,
    showMyNo:number=>number
}

checkFnObj.sayHi("Vimal")

//enum ****Need to learn more
const enum color{
White=1,
Red=2,
Blue=3
}

console.log(color.Blue)

//Functions

//function that returns nothing
let myFn1=(input1:string,input2:number):void=>{
    console.log(input1);
    console.log(input2);
    
}

//Normal function
function myNfn1(a:number,b:string):string{
    console.log(a)
    console.log(b)
    return a+b
}

//function that returns an String
let myFn2=(input1:string,input2:number):string=>{
    console.log(input1);
    console.log(input2);
    return input1+input2

}

//Automatic "contextual typing" applies to arguments of anonymous functions in cases like map & forEach


