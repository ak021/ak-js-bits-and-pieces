import { createAutocomplete } from "./autocomplete.js";

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

const getMovieTemplate = (movieDetail) => {
  console.log({ movieDetail });
  return `
  <article class="media">
    <figure class="media-left">
      <p class="image">
        <img src="${movieDetail.Poster}"/>
      </p>
    </figure>
    <div class="media-content">
      <h1>${movieDetail.Title}</h1>
      <h4>${movieDetail.Genre}</h4>
      <p>${movieDetail.Plot}</p>
    </div>
  </article>
  <article class="notification is-primary">
    <p class="title">${movieDetail.Awards}</p>
    <p class="subtitle">Awards</p>
  </article>
  <article class="notification is-primary">
    <p class="title">${movieDetail.BoxOffice || "N/A"}</p>
    <p class="subtitle">Box Office</p>
  </article>
  <article class="notification is-primary">
    <p class="title">${movieDetail.Metascore}</p>
    <p class="subtitle">Metascore</p>
  </article>
  <article class="notification is-primary">
    <p class="title">${movieDetail.imdbRating}</p>
    <p class="subtitle">IMDB Rating</p>
  </article>
  <article class="notification is-primary">
    <p class="title">${movieDetail.imdbVotes}</p>
    <p class="subtitle">IMDB Votes</p>
  </article>
`;
};

let leftMovie = null;
let rightMovie = null;

const onMoiveSelect = async (movie, summaryRoot, isLeft) => {
  document.querySelector(".tutorial").classList.add("is-hidden");
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "5a3bc03d",
      i: movie.imdbID,
    },
  });
  const movieTemplate = getMovieTemplate(response.data);
  summaryRoot.innerHTML = movieTemplate;

  if (isLeft) {
    leftMovie = response.data;
  } else {
    rightMovie = response.data;
  }

  if (leftMovie && rightMovie) runComparison();
};

const runComparison = () => {
  console.log("left and right movie is redy for comparison");
};

const renderOption = (movie) => {
  const movieImgSrc =
    movie.Poster != "N/A"
      ? movie.Poster
      : "https://api.iconify.design/icon-park:movie-board.svg";

  const option = `
<img src="${movieImgSrc}" class="image is-32x32"/>
${movie.Title}
`;
  return option;
};

const autoCompleteConfig = {
  placeholder: "Search for a movieee",
  fetchFn: fetchData,
  renderOption: renderOption,
  inputValue: (movie) => movie.Title,
};

createAutocomplete({
  ...autoCompleteConfig,
  root: document.querySelector("#left-autocomplete"),
  onOptionSelect: (movie) => {
    onMoiveSelect(movie, document.querySelector("#left-summary"), true);
  },
});

createAutocomplete({
  ...autoCompleteConfig,
  root: document.querySelector("#right-autocomplete"),
  onOptionSelect: (movie) => {
    onMoiveSelect(movie, document.querySelector("#right-summary"), false);
  },
});
