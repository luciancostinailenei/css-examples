import makeRequest from "./fetchModule.js";

makeRequest("https://jsonplaceholder.typicode.com/users").then((response) => {
  const mappedResult = response.map((item) => {
    const {
      username,
      name,
      address: { city },
    } = item;

    return { username, name, city };
  });

  console.log(mappedResult);
});
