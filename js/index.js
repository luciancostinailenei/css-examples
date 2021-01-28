import makeRequest from "./fetchModule.js";

// makeRequest("https://jsonplaceholder.typicode.com/users").then((response) => {
//   const mappedResult = response.map((item) => {
//     const {
//       username,
//       name,
//       address: { city },
//     } = item;

//     return { username, name, city };
//   });

//   console.log(mappedResult);
// });

const constructWorld = (worlds) => {
  // construim domul cu elementele corespunzatoare
};

const retrieveFromLocalStorage = localStorage.getItem("worlds");

if (retrieveFromLocalStorage) {
  // il folosim direct ca sa creem elementele
  constructWorld(JSON.parse(retrieveFromLocalStorage));
} else {
  makeRequest("../js/worlds.json").then((response) => {
    const localStorageValue = JSON.stringify(response);
    localStorage.setItem("worlds", localStorageValue);

    constructWorld(response);
  });
}
