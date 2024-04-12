
// @ts-ignore


// const sum = (num1: number, num2: number): number => {
//     return num1 + num2;
// }

// console.log(sum(5, 10));



// let num = 10;

// let num1 = num + 20;

// console.log(num1);


// let Name: string = "My name is abdullah and My father name is safdar"

// let id = Name.length;

// console.log(id)



// let uper: string = "ABDULLAH"

// let upercase = uper.toUpperCase()

// let lowercase = uper.toLowerCase()
// console.log(upercase + 1);
// console.log(lowercase + 2);





// let Name: boolean = true;

// let Father: boolean = true;

// let school: boolean = false;


// const isEven = (a: number): boolean => {
//     return a % 2 === 5
// }

// console.log(isEven(4))



// let Maxnumber = Number.MAX_SAFE_INTEGER;

// let num: bigint = BigInt(9007199254740991);

// let num1: bigint = num + 2n;

// console.log(num1);


// let num: bigint = BigInt(9007199254740991);

// let Num = BigInt("90071992547409915")

// let sum = num + Num;
// console.log("Add" + sum);


// let sum1 = num - Num;
// console.log("Sum" + sum1);


// let sum1: any = 5;

// sum1 = "45";

// console.log(sum1);


// let num: unknown;
// num = 5;
// num = "abdullah";
// num = true;
// if (typeof num === "number") {
//     console.log(num + 5);

// }



// @ts-ignore
// const nam = (name: string, id: number): void => {
//     console.log(`My name is ${name} and my id is ${id}`);

// }

// nam("abdullah", 1);



const Numfun = (Value: string): boolean => {
    let mynum = Value.split("").reverse().join()
    let test = mynum === Value;
    return test;
}
console.log(Numfun("123621"));


