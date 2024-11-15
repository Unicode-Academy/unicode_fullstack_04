//Vòng lặp: Cú pháp trong lập trình cho phép 1 đoạn chương trình chạy lặp đi lặp lại
// - Vòng lặp xác định số lần lặp
// - Vòng lặp không xác định số lần lặp

//Vòng lặp for: Lặp với số lần xác định
// for (let i = 0; i < 10; i += 2) {
//   console.log(`Lần lặp thứ: ${i}`);
// }
// for (let i = 10; i > 0; i--) {
//   console.log(`Lần lặp thứ: ${i}`);
// }
// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= 5; j++) {
//     console.log(`i: ${i}, j: ${j}`);
//   }
// }
// Từ khóa break: Thoát vòng lặp khi chưa chạy xong
// Từ khóa continue: Bỏ qua vòng lặp

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
//   if (i === 5) {
//     // break;
//     i = 10;
//   }
// }

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 !== 0) {
//     continue;
//   }
//   console.log(i);
//   console.log(i);
// }

//Bài tập 1: Tính tổng các số liên tiếp từ 1 đến n
// let n = 10; // 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55
/*
Bước làm: 
- Tạo biến để lưu trữ tổng --> gán 1 giá trị mặc định
- Vòng lặp chạy từ 1 đến n
- Lấy biến chạy trong vòng lặp và cộng vào biến tổng ở ngoài vòng lặp
- Kết quả biến tổng sau khi vòng lặp kết thúc chính là kết quả của biểu thức
*/
// let total = 0;
// for (let i = 1; i <= n; i++) {
//   total = total + i;
// }
// console.log(total);

//Duyệt chương trình
//total = 0
// i = 1 --> total = total + 1 = 1
// i = 2 --> total = total + 2 = 1 + 2 = 3
// i = 3 --> total = total + 3 = 1 + 2 + 3 = 6
// i = 4 --> total = total + 4 = 1 + 2 + 3 + 4 = 10

//Bài 2: Tính n!
// let n = 5;
// let result = 1;
// for (let i = n; i > 1; i--) {
//   result = result * i;
// }
// console.log(result);

//Bài 3: Tính giá trị biểu thức sau
// S = 1 + 1*2 + 1*2*3 + ... + 1*2*3*...*n
//Ví dụ: n = 5 --> S = 1 + 1*2 + 1*2*3 + 1*2*3*4 + 1*2*3*4*5 = 153
// let n = 5;
// let temp = 1;
// let total = 0;
// for (let i = 1; i <= n; i++) {
//   //Tính i!
//   temp = temp * i;
//   total = total + temp;
// }
// console.log(total);

//Bài 4: Kiểm n có phải là số nguyên tố không?
// - lớn hơn 1
// - CHỈ chia hết cho 1 và chính nó
// let n = 41.5;
// let isPrime = true; //Giả định là đúng
// if (n % 1 !== 0 || n <= 1) {
//   isPrime = false;
// } else {
//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) {
//       isPrime = false;
//       break;
//     }
//   }
// }
// if (isPrime) {
//   console.log(`${n} la so nguyen to`);
// } else {
//   console.log(`${n} khong la so nguyen to`);
// }
//Kỹ thuật đặt cờ hiệu (Cắm cờ)

let a = 10;
let b = 5;
let c = 17;
let d = 7;
//Viết chương trình hiển thị số lớn nhất
let max = a; //Giả định lớn nhất là a
if (max < b) {
  max = b;
}
if (max < c) {
  max = c;
}
if (max < d) {
  max = d;
}
console.log(max);
//Kỹ thuật đặt lính canh
