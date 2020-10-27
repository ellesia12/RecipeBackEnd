const express = require("express");
mockCountryRouter = express.Router();
const countries = [
  {
    id: 1,
    countryDescription: "Brazil",
    contentType: "image/jpeg",
    fileName: "brazil.jpg",
    url:
      "https://www.impulsonegocios.com/wp-content/uploads/2020/05/Cristo-redentor-RJ-DEF.jpg",
  },
  {
    id: 2,
    countryDescription: "Nigeria",
    contentType: "image/jpeg",
    fileName: "Nigeria-national-arts-theatre.jpg",
    url:
      "https://media-cdn.tripadvisor.com/media/photo-s/05/7a/1a/bc/national-arts-theatre.jpg",
  },
];

// Get all countries
mockCountryRouter.get("/", (req, res, next) => {
  res.send(countries);
});

// Get a single expression
mockCountryRouter.get("/:id", (req, res, next) => {
  // console.log({paramsId: req.params.id})
  const foundCountry = countries.find(country => country.id === parseInt(req.params.id,10)
    // console.log({countryId: country.id});
  )
  console.log(foundCountry);
  if (foundCountry) {
    res.send(foundCountry);
  } else {
    res.status(404).send("There's no country with this id");
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
