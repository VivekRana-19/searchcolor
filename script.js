const colors = document.querySelectorAll(".color");
const searchInput = document.querySelector(".colorInput");
const results = document.querySelector(".result");

const colorArr = [];

colors.forEach((color) => {
  color.style.background = color.getAttribute("id");
  colorArr.push(color.getAttribute("id"));
});

function findColor(color, colors) {
  //   const colorRegExp = new RegExp(color, "i");
  return colors.filter((mtcColor) => {
    // return mtcColor.match(colorRegExp);
    return mtcColor.includes(color);
  });
}

const showColor = function () {
  const matchColor = findColor(searchInput.value, colorArr);
  const html = matchColor
    .map((color) => {
      return `<div class="color" style="background:${colour}"></div>`;
    })
    .join("");
  results.innerHTML = html;
};

searchInput.addEventListener("change", showColor);
searchInput.addEventListener("keyup", showColor);
