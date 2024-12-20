const btnList = document.querySelectorAll("[data-target]");
const nav = document.querySelector("nav");
const navHeight = nav.clientHeight;
btnList.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    const hash = this.dataset.target;
    const sectionEl = document.querySelector(hash);
    if (sectionEl) {
      const offsetTop = sectionEl.offsetTop;
      window.scroll({
        top: offsetTop - navHeight,
        behavior: "smooth",
      });
    }
  });
});
