const items = document.querySelectorAll(".menu a");
const css = {
  position: "fixed",
  top: "-9999px",
  left: "-9999px",
  height: "auto",
};
items.forEach(function (item) {
  const subMenu = item.nextElementSibling;
  let subMenuHeight = 0;
  if (subMenu) {
    Object.assign(subMenu.style, css);
    subMenuHeight = subMenu.clientHeight;
    Object.assign(subMenu.style, {
      position: null,
      top: null,
      left: null,
      height: null,
    });
  }
  item.addEventListener("click", function (e) {
    e.preventDefault();

    if (subMenu) {
      const activeMenu = document.querySelector(".menu ul.open");
      subMenu.classList.toggle("open");
      if (subMenu.classList.contains("open")) {
        subMenu.style.height = subMenuHeight + "px";
      } else {
        subMenu.style.height = null;
      }
      if (activeMenu) {
        activeMenu.classList.remove("open");
        activeMenu.style.height = null;
      }
    }
  });
});
