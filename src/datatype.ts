//Primitive Datatypes
let myString:string='Hi' //String Datatype
let myNumber:number=30 //Number Datatype
let myBoolean:boolean=true //boolean Datatype
let myDate:Date=new Date() //Date Datatype

//Non Primivitive Datatypes
let myArray:number[]=[1,2,3] //Array of type number



//function that returns nothing
let myFn1=(input1:string,input2:number):void=>{
    console.log(input1);
    console.log(input2);

}

//function that returns an String
let myFn2=(input1:string,input2:number):string=>{
    console.log(input1);
    console.log(input2);
    return input1+input2

}

//Contextual typing applies to arguments of anonymous functions in cases like map & forEach
