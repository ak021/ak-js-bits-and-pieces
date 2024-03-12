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

const onMoiveSelect = async (movie) => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "5a3bc03d",
      i: movie.imdbID,
    },
  });
  const movieTemplate = getMovieTemplate(response.data);
  document.querySelector("#summary").innerHTML = movieTemplate;
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

createAutocomplete({
  root: document.querySelector(".autocomplete"),
  placeholder: "Search for a movieee",
  fetchFn: fetchData,
  renderOption: renderOption,
  onOptionSelect: onMoiveSelect,
  inputValue: (movie) => movie.Title,
});

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
    <p class="title">${movieDetail.BoxOffice}</p>
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
