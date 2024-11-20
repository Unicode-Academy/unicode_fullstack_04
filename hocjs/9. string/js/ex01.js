//Kiểu dữ liệu nguyên thủy
// let fullname = `Mr. An`;
// console.log(typeof fullname, fullname);

//Trong string có 1 hàm tạo tên là String() --> Chứa các phương thức, thuộc tính xử lý chuỗi
console.log(String.prototype);

let str = "Học lập trình không khó trình";

//length: Lấy độ dài của chuỗi

//charAt(index): Lấy ký tự của chuỗi theo index (index bắt đầu từ 0)

//charCodeAt(index): Lấy mã số ASCII của ký tự theo index
// console.log(str.charCodeAt(0));

//concat: Nối các chuỗi con
// console.log(str.concat("Hoàng An", "Unicode"));

//includes: Kiểm tra chuỗi con có nằm trong chuỗi cha không?
// console.log(str.includes("hoàng an"));

//indexOf: Tìm chuỗi con trong chuỗi cha, trả về vị trí xuất hiện đầu tiên
// console.log(str.indexOf("trình"));

//lastIndexOf: Tìm chuỗi con trong chuỗi cha, trả về vị trí xuất hiện cuối cùng
// console.log(str.lastIndexOf("trình"));

//slice(start, end): Cắt chuỗi từ start đến end-1
// console.log(str.slice(0, 5));
// console.log(str.slice(5));
// console.log(str.slice(-5));

//replace: Thay thế
// console.log(str.replace("trình", "Unicode"));

//replaceAll: Thay thế tất cả
// console.log(str.replaceAll("trình", "Unicode"));

//toUpperCase() --> Chuyển thành chữ hoa
// console.log(str.toUpperCase());

//toLowerCase() --> Chuyển thành chữ thường
// console.log(str.toLowerCase());

//trim(): Xóa khoảng trắng đầu và cuối chuỗi

//trimStart(): Xóa khoảng trắng đầu chuỗi

//trimEnd(): Xóa khoảng trắng cuối chuỗi

// let fullname = ` HOÀNG AN   `;
// console.log(fullname);

// console.log(fullname.trim());

//split: Tách chuỗi thành mảng để dễ xử lý
// let fullname = "Tạ Hoàng An";
// const arr = fullname.split(" ");
// console.log(arr);

//startsWith: Kiểm tra 1 chuỗi con có xuất ở đầu chuỗi cha không?

//endsWith: Kiểm tra 1 chuỗi con có xuất ở cuối chuỗi cha không?
// console.log(str.endsWith("trình"));

//repeat: Lặp chuỗi theo số lần xác định
// console.log(str.repeat(5));

//match: Cắt chuỗi dựa vào biểu thức chính quy (học sau)
// let content = `Hello anh em, điện thoại của tôi là +84388875179 và 0394822896`;
// let pattern = /(0|\+84)\d{9}/g;
// let phones = content.match(pattern);
// console.log(phones);
