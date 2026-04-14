// let n=5;
// for(let i=0;i<n;i++){
//     console.log("Hello",i);
// }
// let args=process.argv;

// for(let i=2;i<args.length;i++){
// console.log("hello & welcome to",args[i]);
// }
const someValue=require("./math");
// console.log(someValue); // dot slash means we require file on same directory.\
console.log(someValue.sum(2,3));
console.log(someValue.PI);
// acquring  fruits directory
const info=require("./Fruits");
console.log(info[0].name);
const figlet=require("figlet");
figlet("Mahak Gupta", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});
// import{sum,PI} from "./math.js";
// console.log(sum(1,2));
// console.log(PI);

// import { generate } from "random-words";
// console.log(generate());