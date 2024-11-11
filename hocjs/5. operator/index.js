// let a = 10;
// let b = "10";
// let c = +a + +b;
// console.log(c)

// let count = 10;
// // count = count + 10;
// count += 10; //count = count + 10
// count **= 2;
// console.log(count);

// let count = 1;
// let total = count++; //total = count; count = count + 1;
// console.log(`Total:`, total);
// console.log(`Count:`, count);

// let count = 1;
// let total = count++ + ++count;
// //          1      +       3
// console.log(`Total:`, total);

/*
let count = 1;
total = count++ + ++count;
total = (count; count = count+1) + (count=count+1; count);
*/

// let a = 1;
// let x;
// let result = ((x = a + 10), a + 20);
// console.log(result);
// console.log(x);

// let user = null;
// let value = 0;
// if (user !== undefined && user !== null && user >= value) {
//   console.log("Đúng");
// } else {
//   console.log("Sai");
// }

// console.log(null || 100 || 5 || undefined);
// console.log("" || 0 || null);
// let a = 10;
// console.log(null || a >= 10 || 0);

// let a = "học lập trình";
// let message = a || "Không có gì";
// console.log(message);

// console.log(10 && true && "Học lập trình");

// let a = false;
// let b = a && a + 10;
// console.log(b);

// let a = 10;
// console.log(!(a >= 10));

// let a = 10;
// let b = a >= 10 ? "Học lập trình" : "Sai rồi";
// console.log(b);

// let a = 30;
// let b = a < 10 ? "A" : a < 20 ? "B" : "C";
// console.log(b);

// let a = 10;
// let b = 1 + 2 + 3 + (a >= 15 ? 10 : 1) + 2 + 3;
// console.log(b);

let a;
let b;
// let b = a ?? 10;
// let b = a === undefined || a === null ? 10 : a;
// console.log(b);
let c = a ?? b ?? 10;
console.log(c);
