/*
- localStorage
- sessionStorage

+ Dung lượng 4-5mb
+ Chỉ lưu trữ text
+ Chỉ hoạt động ở trình duyệt
+ Phân biệt theo origin: scheme + hostname + port

- Cookie

+ Mẩu tin với dung lượng nhỏ được lưu trữ phía trình duyệt
+ Tác dụng: Ghi nhớ lại các hoạt động người dùng
+ Server trả về Header tên là Set-Cookie --> Trình duyệt sẽ cập nhật lại cookie và lưu vào bộ nhớ
+ Server có thể đọc được cookie từ trình duyệt gửi lên thông qua Header (Mặc định)


Cách thêm cookie

1. Thêm từ trình duyệt
- document.cookie=tencookie=giatri;expires=thoigian;path=duong-dan

2. Thêm từ Server
- Trả về HTTP Header Set-Cookie=tencookie=giatri;expires=thoigian;path=duong-dan;httponly;secure

Lưu ý: 

- Cookie sẽ chia sẻ tới tất cả subdomain
- Cookie sẽ phân biệt theo path
*/

// const imageEl = document.querySelector(".image");
// imageEl.addEventListener("change", (e) => {
//   const file = e.target.files[0];
//   const previewUrl = URL.createObjectURL(file);
//   console.log(previewUrl);
// });

const contentEl = document.querySelector(".content");
const content = contentEl.innerText;
const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  const contentBlob = new Blob([content], { type: "text/plain" });
  const url = URL.createObjectURL(contentBlob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "content.txt";
  a.click();
});
