function getMealRec() {
  fetch('https://www.themealdb.com/api/json/v1/1/random.php')
 .then(function(resp) {
    return resp.json()
  })
 .then(function(data){
    console.log(data)
    if (!data ||!data.meals || data.meals.length === 0){
      console.log('No results returned')
      return;
    }
    createResultCard(data.meals[0]);
    genWikiCards(data.meals[0]);
  })
}

function createResultCard(meal) {
  console.log('Meal object', meal)
  const mealTitle = meal.strMeal;
  const mealImg = meal.strMealThumb;
  const mealIngredients = [];
  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`] && meal[`strMeasure${i}`]) {
      mealIngredients.push(`${meal[`strMeasure${i}`]} ${meal[`strIngredient${i}`]}`);
    }
  }
  const mealInstructions = meal.strInstructions;

  const col = document.createElement('div');
  col.className = 'col s12';

  const header = document.createElement('h2');
  header.className = 'header';
  header.textContent = `${mealTitle}`;

  const card = document.createElement('div');
  card.className = 'card horizontal';

  const cardImage = document.createElement('div');
  cardImage.className = 'card-image';

  const img = document.createElement('img');
  img.src = mealImg;

  cardImage.appendChild(img);

  const cardStacked = document.createElement('div');
  cardStacked.className = 'card-stacked';

  const cardContent = document.createElement('div');
  cardContent.className = 'card-content';

  const ul = document.createElement('ul');

  mealIngredients.forEach(ingredient => {
    const li = document.createElement('li');
    li.textContent = ingredient;
    ul.appendChild(li);
  });
  
  cardContent.appendChild(ul);
  

  const cardAction = document.createElement('div');
  cardAction.className = 'card-action';

  const paragraph = document.createElement('p');

  paragraph.textContent = `Meal Instructions: ${mealInstructions}`;

  cardAction.appendChild(paragraph);

  cardStacked.appendChild(cardContent);
  cardStacked.appendChild(cardAction);

  card.appendChild(cardImage);
  card.appendChild(cardStacked);

  col.appendChild(header);
  col.appendChild(card);

  document.querySelector('#meal-box').appendChild(col);
}
function grabSpecificMeal() {
  const idSearch = window.location.search;
  console.log(idSearch);
  const param = new URLSearchParams(idSearch)
  const id = param.get('id');
console.log(id)
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
 .then(function(resp) {
    return resp.json()
  })
 .then(function(data){
    console.log(data)
    if (!data ||!data.meals || data.meals.length === 0){
      console.log('No results returned')
      return;
    }
    createResultCard(data.meals[0]);
    genWikiCards(data.meals[0]);
  })
}

if (window.location.search) {
  grabSpecificMeal();
} else {
  getMealRec();
}

function genWikiCards (meal) {
  const country = meal.strArea;
  const wikiURL = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${country}+cuisine&format=json`
  searchWiki(wikiURL);
  
  fetch(wikiURL)
  .then(response => response.json())
  .then(data => {
   if (!data ||!data.query ||!data.query.search || data.query.search.length === 0) {
     console.log('No results returned');
     return;
   }
   data.query.search.forEach(search => {
     createWikiCard(search);
   });
 })
}

// dateModified
// : 
// null
// idMeal
// : 
// "53030"
// strArea
// : 
// "Egyptian"
// strCategory
// : 
// "Side"
// strCreativeCommonsConfirmed
// : 
// null
// strDrinkAlternate
// : 
// null
// strImageSource
// : 
// null
// strIngredient1
// : 
// "Flour"
// strIngredient2
// : 
// "Water"
// strIngredient3
// : 
// "Salt"
// strIngredient4
// : 
// "Unsalted Butter"
// strIngredient5
// : 
// "Olive Oil"
// strIngredient6
// : 
// ""
// strIngredient7
// : 
// ""
// strIngredient8
// : 
// ""
// strIngredient9
// : 
// ""
// strIngredient10
// : 
// ""
// strIngredient11
// : 
// ""
// strIngredient12
// : 
// ""
// strIngredient13
// : 
// ""
// strIngredient14
// : 
// ""
// strIngredient15
// : 
// ""
// strIngredient16
// : 
// ""
// strIngredient17
// : 
// ""
// strIngredient18
// : 
// ""
// strIngredient19
// : 
// ""
// strIngredient20
// : 
// ""
// strInstructions
// : 
// "Mix the flour and salt then pour one cup of water and start kneading.\r\nIf you feel the dough is still not coming together or too dry, gradually add the remaining water until you get a dough that is very elastic so that when you pull it and it won’t be torn.\r\nLet the dough rest for just 10 minutes then divide the dough into 6-8 balls depending on the size you want for your feteer.\r\nWarm up the butter/ghee or oil you are using and pour into a deep bowl.\r\nImmerse the dough balls into the warm butter. Let it rest for 15 to 20 minutes.\r\nPreheat oven to 550F.\r\nStretch the first ball with your hands on a clean countertop. Stretch it as thin as you can, the goal here is to see your countertop through the dough.\r\nFold the dough over itself to form a square brushing in between folds with the butter mixture.\r\nSet aside and start making the next ball.\r\nStretch the second one thin as we have done for the first ball.\r\nPlace the previous one on the middle seam side down. Fold the outer one over brushing with more butter mixture as you fold. Set aside.\r\nKeep doing this for the third and fourth balls. Now we have one ready, place on a 10 inch baking/pie dish seam side down and brush the top with more butter.\r\nRepeat for the remaining 4 balls to make a second one. With your hands lightly press the folded feteer to spread it on the baking dish.\r\nPlace in preheated oven for 10 minutes when the feteer starts puffing turn on the broiler to brown the top.\r\nWhen it is done add little butter on top and cover so it won’t get dry."
// strMeal
// : 
// "Feteer Meshaltet"
// strMealThumb
// : 
// "https://www.themealdb.com/images/media/meals/9f4z6v1598734293.jpg"
// strMeasure1
// : 
// "4 cups "
// strMeasure2
// : 
// "1 1/2 cups "
// strMeasure3
// : 
// "1/4 tsp"
// strMeasure4
// : 
// "1 cup "
// strMeasure5
// : 
// "1/4 cup"
// strMeasure6
// : 
// " "
// strMeasure7
// : 
// " "
// strMeasure8
// : 
// " "
// strMeasure9
// : 
// " "
// strMeasure10
// : 
// " "
// strMeasure11
// : 
// " "
// strMeasure12
// : 
// " "
// strMeasure13
// : 
// " "
// strMeasure14
// : 
// " "
// strMeasure15
// : 
// " "
// strMeasure16
// : 
// " "
// strMeasure17
// : 
// " "
// strMeasure18
// : 
// " "
// strMeasure19
// : 
// " "
// strMeasure20
// : 
// " "
// strSource
// : 
// "https://amiraspantry.com/egyptian-feteer-meshaltet/"
// strTags
// : 
// null
// strYoutube
// : 
// "https://www.youtube.com/watch?v=-mW1unsVhFU"