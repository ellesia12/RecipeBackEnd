const express = require("express");
mockRecipesRouter = express.Router();
const recipes = [
{
  id: "6XIxvB6D65ferGw8e4uDXv",
  recipeDescription: "Apple Pie - an American Classic",
  relatedCountry: "United States",
  recipeImage: "",
  contentType: "image/jpeg",
  fileName: "applepie.jpg",
  url: "//images.ctfassets.net/3evqbw19xpvd/3Ngh9bwC8qyT9IOvCtMlEG/9cf766f69c7d67eba094f5f6af33ab52/applepie.jpg"
},

{ 
  id: "6Taq86y5aORzSfWXZx8GKL",
  recipeDescription: "Black Forest Cake",
  relatedCountry: "Germany",
  recipeImage: "",
  contentType: "image/jpeg",
  fileName: "",
  url: "//images.ctfassets.net/3evqbw19xpvd/69iq7CSd9pVYdC5nt14xTz/229eaf1a6a56110f0fcdbf60c03fe5e2/Schwarzwa_CC_88lder-Kirschtorte-1024x683.jpg"
},

{
  id: "5sm4yWTYa1atpIprk0tYEd",
  recipeDescription: "Pounded Yam and Egusi Soup",
  relatedCountry: "Nigeria",
  recipeImage: "",
  contentType: "image/jpeg",
  fileName: "homepage-nigerian.jpg",
  url: "//images.ctfassets.net/3evqbw19xpvd/18yDKyrmt2cjZXHAfpz9sN/170433bf59bceadf0d3d6eb0b4ace63b/homepage-nigerian.jpg",
},
]

// Get all countries
mockRecipesRouter.get("/", (req, res, next) => {
  res.send(recipes);
});

// Get a single expression
mockCountryRouter.get("/:id", (req, res, next) => {
  const foundRecipe = getElementById(req.params.id, recipes);
  if (foundRecipe) {
    res.send(foundRecipe);
  } else {
    res.status(404).send();
  }
});

module.exports = mockRecipesRouter;