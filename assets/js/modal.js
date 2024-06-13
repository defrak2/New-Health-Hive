const formEl = document.getElementById('form-category');
//create fetch to populate the dropdown menu


formEl.addEventListener('change', function() {

//pull value that was selected and run a fetch call that will get the info, populate the modal with the fetched info 



  const elems = document.querySelectorAll('.modal');
  const instances = M.Modal.init(elems, {
    // options here
  });
  const instance = M.Modal.getInstance(elems[0]); // get the instance of the first modal
  // use the instance
  instance.open(); // open the modal
});


fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
  .then(response => response.json())
  .then(data => {
      const categories = data.categories;
      categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category.idCategory;
        option.text = category.strCategory;
        formSelect.appendChild(option);
      });
    });

  searchBtn.addEventListener('click', function() {
    const categoryId = formSelect.value;
    // Fetch random recipe for selected category
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryId}`)
    .then(response => response.json())
    .then(data => {
        const recipes = data.meals;
        const randomIndex = Math.floor(Math.random() * recipes.length);
        const randomRecipe = recipes[randomIndex];
        // Display the random recipe in the modal
        randomRecipeElement.textContent = `Name: ${randomRecipe.strMeal}
                                          Ingredients: ${randomRecipe.strIngredient1}, ${randomRecipe.strIngredient2},...
                                          Instructions: ${randomRecipe.strInstructions}`;
        modal.style.display = 'block';
      });
  });

  // Add an event listener to close the modal when clicked outside
  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });