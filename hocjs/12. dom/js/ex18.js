const inputEl = document.querySelector("input");
const finishEvent = new Event("finish");
// finishEvent.detail = "ahihi";
// finishEvent.detail = "abc";
// const finishEvent = new CustomEvent("finish", {
//   detail: {
//     something: "ahihi",
//   },
// });
// finishEvent.detail = "abc";
inputEl.addEventListener("input", function () {
  const value = this.value;
  if (+value === 100) {
    inputEl.dispatchEvent(finishEvent);
  }
});

//Giải pháp
// --> Tạo event mới khi value === 100
// --> Tại nơi muốn xử lý logic --> Lắng nghe khi nào event đã tạo ở trên được kích hoạt (Fire)

//Các bước tạo event
//1. Tạo object Event bằng class Event hoặc Custom Event
//2. Xác định element cần kích hoạt event
//3. Xác định logic cần gửi event (Dispatch)

//Lưu ý: Hoàn toàn tạo 1 event mới cùng tên với event đã có
