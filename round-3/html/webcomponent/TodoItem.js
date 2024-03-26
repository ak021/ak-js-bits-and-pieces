class TodoItem extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = "Hi i am custom";
  }
}

// register with dom
// we need to gave the name for the element
// name should have a hyphen

customElements.define("todo-item", TodoItem);
