function getMealRec() {
  fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(function(resp) {
      return resp.json()
    })
    .then(function(data) {
      console.log(data)
      if (!data || !data.meals || data.meals.length === 0) {
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

  const favoriteButton = document.createElement('button');
  favoriteButton.className = 'btn favorite-btn';
  favoriteButton.textContent = 'Add to Favorites';

  favoriteButton.addEventListener('click', function() {
    addToFavorites(meal);
  });

  cardAction.appendChild(favoriteButton);

  cardStacked.appendChild(cardContent);
  cardStacked.appendChild(cardAction);

  card.appendChild(cardImage);
  card.appendChild(cardStacked);

  col.appendChild(header);
  col.appendChild(card);

  document.querySelector('#meal-box').appendChild(col);
}

function addToFavorites(meal) {
  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

  
  const existingIndex = favorites.findIndex(fav => fav.idMeal === meal.idMeal);

  if (existingIndex === -1) {
    favorites.push(meal);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    alert('Meal added to favorites!');
  } else {
    alert('This meal is already in your favorites!');
  }
}

function grabSpecificMeal() {
  const idSearch = window.location.search;
  console.log(idSearch);
  const param = new URLSearchParams(idSearch)
  const id = param.get('id');
  console.log(id)
  if (id) {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(function(resp) {
        return resp.json()
      })
      .then(function(data) {
        console.log(data)
        if (!data || !data.meals || data.meals.length === 0) {
          console.log('No results returned')
          return;
        }
        const mealData = data.meals[0];
        console.log(mealData);
        createResultCard(data.meals[0]);
        genWikiCards(data.meals[0]);
      })
      .catch(error => console.log(error))
  }

}

if (window.location.search) {
  grabSpecificMeal();
} else {
  getMealRec();
}

function genWikiCards(meal) {
  const country = meal.strArea;
  const wikiURL = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${country}+cuisine&format=json`
  searchWiki(wikiURL);

  fetch(wikiURL)
    .then(response => response.json())
    .then(data => {
      if (!data || !data.query || !data.query.search || data.query.search.length === 0) {
        console.log('No results returned');
        return;
      }
      data.query.search.forEach(search => {
        createWikiCard(search);
      });
    })
}


function searchWiki(wikiURL) {
  const script = document.createElement('script');
  script.src = `${wikiURL}&callback=handleWikiResponse`;
  document.head.appendChild(script);

}

function handleWikiResponse(data) {
  console.log(data);
  if (data.query.search && data.query.search.length > 0) {
    data.query.search.forEach(search => {
      createWikiCard(search);
    });
  } else {
    console.log('No search results found');
  }
}


function createWikiCard(search) {
  console.log('Search object', search)
  const title = search.title;
  const snippet = search.snippet;
  const url = `https://en.wikipedia.org/wiki/${title}`;

  const wikiCard = document.createElement('div');
  wikiCard.innerHTML = `
  <div class="card">
  <div class="card-content">
    <span class="card-title">${title}</span>
    <p>${snippet}</p>
  </div>
  <div class="card-action">
    <a href="${url}">Read more on Wikipedia</a>

  </div>
</div>
  `;
  document.getElementById('wiki-cards-container').appendChild(wikiCard);
}
