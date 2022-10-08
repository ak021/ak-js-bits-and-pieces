const colorList = [
  "#2192FF",
  "#D58BDD",
  "#372948",
  "#9CFF2E",
  "#6F38C5",
  "#00FFD1",
  "#FF577F",
];

const boxContainer = document.querySelector("#boxes");

for (let color of colorList) {
  const box = document.createElement("div");
  box.style.backgroundColor = color;
  box.classList.add("box");
  boxContainer.appendChild(box);

  box.addEventListener("mouseover", () => {
    box.classList.add("zoom");
  });

  box.addEventListener("mouseleave", () => {
    box.classList.remove("zoom");
  });
}
