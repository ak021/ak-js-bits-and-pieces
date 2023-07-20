const fetchData = async (searchTerm) => {
  try {
    const response = await axios.get("http://www.omdbapi.com/", {
      params: {
        apikey: "1cef1604",
        s: searchTerm,
      },
    });
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

const handleInput = debounce((event) => {
  fetchData(event.target.value);
}, 1000);

const input = document.querySelector("input");
input.addEventListener("input", handleInput);
