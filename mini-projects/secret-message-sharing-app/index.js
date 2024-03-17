document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  document.querySelector("#form-card").classList.add("hide");
  document.querySelector("#link-card").classList.remove("hide");
  const input = document.querySelector("input");
  const encrypted = btoa(input.value);
  const linkInput = document.querySelector("#link-input");
  linkInput.value = `${window.location}#${encrypted}`;
  linkInput.select();
});
