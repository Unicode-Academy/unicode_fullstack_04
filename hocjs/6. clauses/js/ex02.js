//Câu lệnh switch case
let action = "remove";
switch (action) {
  case "add":
  case "insert":
  case "create":
    console.log("Thêm");
    break;
  case "edit":
  case "update":
    console.log("Sửa");
    break;
  case "delete":
  case "remove":
  case "destroy":
    console.log("Xóa");
    break;
  case "view":
  case "read":
    console.log("Xem");
    break;
  default:
    console.log("Không xác định");
    break;
}

// Chuyển câu lệnh trên thành if else
