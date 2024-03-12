import { debounce } from "./utils.js";

export function createAutocomplete({
  root,
  fetchFn,
  renderOption,
  onOptionSelect,
  inputValue,
  placeholder = "",
}) {
  // attaching the basic structure to the root
  root.innerHTML = `
  <label><b>${placeholder}</b></label>
  <input class="input"/>
  <div class="dropdown">
    <div class="dropdown-menu">
      <div class="dropdown-content results"></div>
    </div>
  </div>
`;

  // specifically checking for elements inside root which is provided
  const searchInput = root.querySelector("input");
  const dropdown = root.querySelector(".dropdown");
  const resultsWrapper = root.querySelector(".results");

  const renderOptions = (data) => {
    for (const option of data) {
      const optionLink = document.createElement("a");
      optionLink.classList.add("dropdown-item");
      optionLink.innerHTML = renderOption(option);
      optionLink.addEventListener("click", () => {
        dropdown.classList.remove("is-active");
        searchInput.value = inputValue(option);
        onOptionSelect(option);
      });
      resultsWrapper.appendChild(optionLink);
    }
  };

  const handleInputChange = async (e) => {
    const searchString = e.target.value;

    if (!searchString) {
      dropdown.classList.remove("is-active");
      return;
    }
    const data = await fetchFn(searchString);
    // cleanup the previous search result
    resultsWrapper.innerHTML = "";
    dropdown.classList.add("is-active");

    if (!data.length) {
      resultsWrapper.innerHTML = `
      <div class="results-empty">
      <img src="https://api.iconify.design/streamline:interface-folder-remove-remove-minus-folder-subtract-delete.svg" class="image is-24x24"/>
      <p>No result found</p>
      </div>
      `;
    } else {
      renderOptions(data);
    }
  };

  searchInput.addEventListener("input", debounce(handleInputChange));
  // listener to close the dropdown
  document.addEventListener("click", (event) => {
    // if user clicks on any element which is not related to the autocomplete dropdown, then close it
    if (!root.contains(event.target)) {
      dropdown.classList.remove("is-active");
    }
  });
}
