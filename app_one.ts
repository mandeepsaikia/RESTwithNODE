function Add_1( num1:number, num2:number){
    return num1+num2
}

function Add_2(num1: number | string, num2: number| string){ //Specifying types in params..
    if(typeof(num1)==='number' && typeof(num2)==='number'){
        return num1*num2;
    }
}

function Add_3(num1: {val1:number, val2:string, val3:any}){ //Here I am defining 'object' type (with specific keys) for my num1 param
   return num1.val1+num1.val2 + num1.val3;
}
//const x = docuemnt.getElementById('zzzz') as HTMLInputElement //Here, we are 'type casting' of the return type using 'as' keyword 
console.log(Add_1(1,2))

let result = Add_3({val1:10 as number, val2:'test' as string, val3:100.00 as number})
console.log(result)
//console.log(Add_1('1','2'))

const arr_1: number[] = [] //specyfying 'array' type
const arr_2: string[] = []

function GiveMeSomeNumber(a : number){
    arr_1.push(a);
}

function GiveMeSomeString(a : string){
    arr_2.push(a);
}


type NumOrStringType = number | string; //defining a type alias here..

type MyObjType = {val1:number, val2:string, val3:any};

function GiveMeSomeNumberOrString(a: NumOrStringType, b:MyObjType){
    //
}

const myPromise = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve('It resolves the promise !')
    }, 1000);
})

myPromise.then((result)=>{
    console.log(result)
})

console.log('Generic call !!')

/*
 How to write a node.js application using typescript?
 # We have to install a package called @types/node - this enables us to use typescript translations for javascript code..
 # *.d.ts files are basically ts files only - as such instructions to convert ts code to js code.

 */

 //const express = require('express')
 import express from 'express'; // We do it this way in typescript
 const app = express()

 //import {Router} from 'express' <- This way we can import only specific objects, not entire file
 /* export default router <- Exporting an object from a file
        +
    import _routes from '../zz/zzz.ts' <- This _routes is the default export        
*/
/*
  Named Exports ->
  Say, below code =
  export interface MyInterface{ 
    id: number,
    name: string
  }
    + 
  import { myInterface } from '../zz/zz1.ts' //named import syntax



*/
 //app.listen()

 



 
