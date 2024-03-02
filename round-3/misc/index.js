function random(number) {
  return Math.floor(Math.random() * number + 1);
}

const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  const backgroundColor = `rgb(${random(255)},${random(255)},${random(255)})`;
  console.log({ backgroundColor });
  document.body.style.backgroundColor = backgroundColor;
});
