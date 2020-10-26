const express = require("express");
mockRecipesRouter = express.Router();
const recipes = [
{
  id: 1,
  recipeDescription: "Apple Pie - an American Classic",
  relatedCountry: "United States",
  recipeImage: "",
  contentType: "image/jpeg",
  fileName: "applepie.jpg",
  countryRelated_id: 1,
  url: "//images.ctfassets.net/3evqbw19xpvd/3Ngh9bwC8qyT9IOvCtMlEG/9cf766f69c7d67eba094f5f6af33ab52/applepie.jpg"
},

{ 
  id: 2,
  recipeDescription: "Black Forest Cake",
  relatedCountry: "Germany",
  recipeImage: "",
  contentType: "image/jpeg",
  fileName: "",
  countryRelated_id: 2,
  url: "//images.ctfassets.net/3evqbw19xpvd/69iq7CSd9pVYdC5nt14xTz/229eaf1a6a56110f0fcdbf60c03fe5e2/Schwarzwa_CC_88lder-Kirschtorte-1024x683.jpg"
},

{
  id: 3,
  recipeDescription: "Pounded Yam and Egusi Soup",
  relatedCountry: "Nigeria",
  recipeImage: "",
  contentType: "image/jpeg",
  fileName: "homepage-nigerian.jpg",
  countryRelated_id: 1,
  url: "//images.ctfassets.net/3evqbw19xpvd/18yDKyrmt2cjZXHAfpz9sN/170433bf59bceadf0d3d6eb0b4ace63b/homepage-nigerian.jpg",
},
]

// Get all countries
mockRecipesRouter.get("/", (req, res, next) => {
  res.send(recipes);
});
// Get a single expression
mockRecipesRouter.get("/:id", (req, res, next) => {
  const foundRecipe = recipes.find(recipe => recipe.id === req.params.id);
  console.log(recipes.id)
  if (foundRecipe) {
    res.send(foundRecipe);
  } else {
    res.status(404).send('This recipe was not found');
  }
});

module.exports = mockRecipesRouter;