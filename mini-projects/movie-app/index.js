import { debounce } from "./utils.js";

const fetchData = async (searchString) => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "5a3bc03d",
      s: searchString,
    },
  });
  // if no result found return an empty array
  if (response.data.Error) return [];
  return response.data.Search;
};

const autoCompleteRoot = document.querySelector(".autocomplete");
autoCompleteRoot.innerHTML = `
  <label><b>Search for a movie</b></label>
  <input class="input"/>
  <div class="dropdown">
    <div class="dropdown-menu">
      <div class="dropdown-content results"></div>
    </div>
  </div>
`;

const searchInput = document.querySelector("input");
const dropdown = document.querySelector(".dropdown");
const resultsWrapper = document.querySelector(".results");

const renderMovies = (movies) => {
  for (const movie of movies) {
    const movieLink = document.createElement("a");
    movieLink.classList.add("dropdown-item");
    const movieImgSrc =
      movie.Poster != "N/A"
        ? movie.Poster
        : "https://api.iconify.design/icon-park:movie-board.svg";
    movieLink.innerHTML = `
    <img src="${movieImgSrc}" class="image is-32x32"/>
    ${movie.Title}
    `;
    resultsWrapper.appendChild(movieLink);
  }
};

const renderEmptyResult = () => {
  resultsWrapper.innerHTML = `
  <div class="results-empty">
  <img src="https://api.iconify.design/streamline:interface-folder-remove-remove-minus-folder-subtract-delete.svg" class="image is-24x24"/>
  <p>No result found</p>
  </div>
  `;
};

const handleInputChange = async (e) => {
  const searchString = e.target.value;

  if (!searchString) {
    dropdown.classList.remove("is-active");
    return;
  }

  const movies = await fetchData(searchString);

  // cleanup the previous search result
  resultsWrapper.innerHTML = "";
  dropdown.classList.add("is-active");

  if (!movies.length) {
    renderEmptyResult();
  } else {
    renderMovies(movies);
  }
};

searchInput.addEventListener("input", debounce(handleInputChange));

// listener to close the dropdown
document.addEventListener("click", (event) => {
  // if user clicks on any element which is not related to the autocomplete dropdown, then close it
  if (!autoCompleteRoot.contains(event.target)) {
    dropdown.classList.remove("is-active");
  }
});
