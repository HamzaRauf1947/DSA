//? Reverse String 


// const reverseString = (str)=>{
//     let reverseStr = "";
//     for (let i = str.length-1; i >= 0; i--) {
//         reverseStr = reverseStr + str[i];
//     }
//     return reverseStr;
// }

// console.log(reverseString("Hello"));

//? palindromes

// const palindome = (str)=>{
//     let reverse = '';

//     for (let i = str.length-1; i>=0; i--) {
//         reverse += str[i];
//     }
//     if(reverse == str){
//        return (`${str} is palindrome`);
        
//     }else{
//         return (`${str} is not palindrome`);
        
//     }
   
// }

// console.log(palindome("1211"));



//? reverse integer

// const reverInt = (num)=>{
//     let str = num.toString();
//     let reverseInt = "";
//     for (let i = str.length-1; i >= 0; i--) {
//         reverseInt += str[i];
//     }
   
//     reverseInt = parseInt(reverseInt) *Math.sign(num);
//     return reverseInt;
// }
// console.log(reverInt(-1234));


//? Capitilization 

// const Capitilization = sen => {
//     sen = sen.toLowerCase().split(" ");

//     for (let i = 0; i < sen.length; i++) {
//         sen[i] = sen[i][0].toUpperCase() + sen[i].slice(1);
        
//     }

//     return sen.join(" ");
 
// }



// console.log(Capitilization("hEllo woRld"));


//? FizzBuzz

// const fizzBuzz = val => {
//     for (let i = 1 ; i <= val; i++) {
//         if(i%3 == 0 && i%5!=0){
//             console.log("Fizz");
//         }else if(i%5==0 && i%3 !=0){
//             console.log("Buzz");
//         }else if(i%3==0 && i%5 ==0){
//             console.log("FizzBuzz");
//         }else{
//             console.log(i);
//         }  
//     }
// }


// fizzBuzz(15);


//? max Profit

// const maxProfit = (price)=>{
//     let min = 0; let ind = 0;
//     for (let i = 0; i < price.length; i++) {
//         if(price[i]<min){
//             min = price[i];
//             ind = i;
//         }
        
//     }
//     let max = 0;
//     for (let i = ind; i < price.length; i++) {
//         if(price[i]>max){
//             max = price[i];
//         }
        
//     }
//     let profit = max - min;

//     return profit;
    
// }


// let price = [7,4,5,3,6,4];
// console.log(maxProfit(price));




//? Array chunks


// const arrayChunks = (arr,chunks)=>{

//     let outer = [];
//    for (let j = 0; j < arr.length; j=j+chunks) {
//     let inner = [];
//     let k = j; 
//     for (let i = k; i < chunks+j; i++) {
//         if(arr[i] || arr[i] == 0){
//         inner.push(arr[i]);
//         k++;
//         }
//     }
//     outer.push(inner);
    
//    }

// return outer
// }


// console.log(arrayChunks([1,2,3,4,5,0],2));


// //? Two Sum


// const twoSum = (arr,target)=>{
//     let flag = false;
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if(i != j){
//                 if(arr[i]+arr[j] === target){
//                     flag = false;
//                     return {i:arr[i],
//                             j:arr[j]
//                     }
//                 }else{
//                     flag = true;
//                 }
//             }
//         }
//     }

//     if(flag) return `There is no two sum of your target value ${target}`
// }
// console.log(twoSum([2,7,11,15],17));



//? Efficient Two Sum Method


// const twoSum = (arr, target) => {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === target) {
//                 return { num1: arr[i], num2: arr[j] };
//             }
//         }
//     }
//     return `There is no two sum of your target value ${target}`;
// };

// console.log(twoSum([5, 7, 11,5, 15],10)); 

