const express = require("express");
mockCountryRouter = express.Router();
const countries = [
  {
    id: 1,
    countryDescription: "Brazil",
    contentType: "image/jpeg",
    fileName: "brazil.jpg",
    url:
      "//images.ctfassets.net/3evqbw19xpvd/2B1dNgnRyDv125ytsrRaG1/d830ef0bfcd962b5da234bd1b613e28a/brazil.jpg",
  },
  {
    id: 2,
    countryDescription: "Nigeria",
    contentType: "image/jpeg",
    fileName: "Nigeria-national-arts-theatre.jpg",
    url:
      "//images.ctfassets.net/3evqbw19xpvd/6gRT1HkV5v9lKVNSuKfhDd/3b1d1034fbd4f736e7bb816e797ae9db/Nigeria-national-arts-theatre.jpg",
  },
];

// Get all countries
mockCountryRouter.get("/", (req, res, next) => {
  res.send(countries);
});

// Get a single expression
mockCountryRouter.get("/:id", (req, res, next) => {
  const foundCountry = getElementById(req.params.id, countries);
  if (foundCountry) {
    res.send(foundCountry);
  } else {
    res.status(404).send();
  }
});

// Update an expression
// mockCountryRouter.put("/:id", (req, res, next) => {
//   const countryIndex = getIndexById(req.params.id, countries);
//   if (countryIndex !== -1) {
    // updateElement(req.params.id, req.query, countries);
    // res.send(countries[countryIndex]);
//   } else {
    // res.status(404).send();
//   }
// });

// Create an expression
// mockCountryRouter.post("/", (req, res, next) => {
//   const receivedExpression = createElement("countries", req.query);
//   if (receivedExpression) {
    // countries.push(receivedExpression);
    // res.status(201).send(receivedExpression);
//   } else {
    // res.status(400).send();
//   }
// });

// Delete an expression
// mockCountryRouter.delete("/:id", (req, res, next) => {
//   const countryIndex = getIndexById(req.params.id, countries);
//   if (countryIndex !== -1) {
    // countries.splice(countryIndex, 1);
    // res.status(204).send();
//   } else {
    // res.status(404).send();
//   }
// });

module.exports = mockCountryRouter;
