const myForm = document.getElementById("my-form");

myForm.addEventListener("submit", (event) => {
  event.preventDefault();
  alert("form submitted");
});

//input and change are the two main events associated with form
//both are similar, but input actually update the change immediately (in the case of text input), where as on change will trigger when on focus or on blur;
