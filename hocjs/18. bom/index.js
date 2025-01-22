//Location

console.log(window.location);

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  }
}

function showPosition(position) {
  console.log(position.coords);
}

const btn = document.querySelector("button");
btn.addEventListener("click", function () {
  //   window.location.href = "https://google.com";
  //   window.location.reload();
  //   const searchParams = new URLSearchParams(window.location.search);
  //   const status = searchParams.get("status");
  //   console.log(status);
  //   window.location.pathname = "/ahihi";
  //   window.history.pushState(null, null, "/ahihi");
  getLocation();
});

console.log(navigator);

// window.addEventListener("online", () => {
//   console.log("Đã kết nối Internet");
// });
// window.addEventListener("offline", () => {
//   console.log("Mất kết nối Internet");
// });
