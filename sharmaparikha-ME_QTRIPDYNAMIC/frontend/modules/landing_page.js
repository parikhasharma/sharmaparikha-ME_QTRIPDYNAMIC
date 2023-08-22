import config from "../conf/index.js";

async function init() {
  //Fetches list of all cities along with their images and description
  let cities = await fetchCities();

  //Updates the DOM with the cities
  if (cities) {
    cities.forEach((key) => {
      addCityToDOM(key.id, key.city, key.description, key.image);
    });
  }
  // console.log(cities);
}

//Implementation of fetch call
async function fetchCities() {
  // TODO: MODULE_CITIES
  // 1. Fetch cities using the Backend API and return the data
  try {
    const response = await fetch(config.backendEndpoint + "/cities");
    const data = await response.json();
    return data;
  } catch (error) {
    return null;
  }
}

//Implementation of DOM manipulation to add cities
function addCityToDOM(id, city, description, image) {
  // TODO: MODULE_CITIES
  // 1. Populate the City details and insert those details into the DOM
    let cityCard = document.getElementById("data");
    let cityDetails = document.createElement("div");
    cityDetails.setAttribute("class", "col-12 col-sm-6 col-lg-3 mb-4");
    cityDetails.innerHTML = `
    <a href="pages/adventures/?city=${id}" id=${id}>
    <div class="tile">
      <div class="tile-text text-center">
        <h5>${city}</h5>
        <p>${description}</p>
      </div>
      <img src=${image} />
    </div>
    </a>`;
    cityCard.appendChild(cityDetails);
}

export { init, fetchCities, addCityToDOM };
