const express = require("express");
RecipesRouter = express.Router();
const client = require('./client');


RecipesRouter.get('/', (req, res) =>{

  client
      .query("SELECT * FROM recipes")
      .then((data) => res.send(data.rows))
      .then((data)=> console.log(data.rows))
      .catch((error)=> res.sendStatus(500));
})


RecipesRouter.get('/:id', (req, res)=>{
  const { id } = req.params;
  client
    .query("SELECT * FROM recipes WHERE id=$1", [id])
    .then((data)=> res.json(data.rows))
    .catch((error)=> res.sendStatus(500));
})

RecipesRouter.get('/relatedc/:countryid', (req, res)=>{
  const { countryid } = req.params;
  client
    .query("SELECT * FROM recipes WHERE countryid=$1", [countryid])
    .then((data)=> res.json(data.rows))
    .catch((error)=> res.sendStatus(500));
})

/*
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
*/

/* RecipesRouter.get('/recipes', (req, res) =>{
  //client
     /*  .query("")
      .then((data)=> res.send())
      .catch((error)=>res.sendStatus(500)) */
     // res.send("Welcome to the Jungle!");   
/* } 
) */

// Get all countries
/* RecipesRouter.get("/recipes", (req, res, next) => {
  res.send(recipes);
}); */

/* RecipesRouter.get('/recipes/:id', (req, res)=>{
  const { id } = req.params;
  client
    .query("SELECT * FROM recipes WHERE id=$1", [id])
    .then((data)=> res.json(data.rows))
    .catch((error)=> res.sendStatus(500));
})
 */
/* // Get a single expression
RecipesRouter.get("/recipes/:id", (req, res, next) => {
  const foundRecipe = recipes.find(recipe => recipe.id === req.params.id);
  console.log(recipes.id)
  if (foundRecipe) {
    res.send(foundRecipe);
  } else {
    res.status(404).send('This recipe was not found');
  }
}); */

module.exports = RecipesRouter;