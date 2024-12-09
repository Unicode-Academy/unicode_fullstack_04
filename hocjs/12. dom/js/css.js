const { box } = require("./ex07");

// box.style = "color: red";
// box.style = "background: grey";
// box.style.color = "red";
// box.style.background = "grey";
// box.style.fontSize = "30px"; //font-size
// box.style.fontStyle = "italic";
// console.log(box.style.color);
const css = {
  color: "green",
  background: "yellow",
  fontSize: "28px",
};
Object.assign(box.style, css);
