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
const sectionList = document.querySelectorAll("section");
// const documentHeight = document.body.clientHeight;
// console.log(documentHeight);

// window.addEventListener("scroll", function () {
//   let foundEl = null;
//   sectionList.forEach(function (section) {
//     const rec = section.getBoundingClientRect();
//     if (rec.top >= 0 && rec.bottom <= documentHeight) {
//       if (!foundEl) {
//         foundEl = section;
//       }
//     }
//   });
//   if (foundEl) {
//     const id = foundEl.id;
//     console.log(id);
//   }
// });

const observer = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        const section = entry.target;
        console.log(section.id);
      }
    });
  },
  {
    threshold: 0.5,
  }
);

sectionList.forEach(function (section) {
  observer.observe(section);
});
