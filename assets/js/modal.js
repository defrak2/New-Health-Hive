const formEl = document.getElementById('form-category');
const formSelect = document.getElementById('form-select-6');
const selectEl = formEl.querySelector('select');
const cuisineList = document.getElementById('cuisine-list');
const elems = document.querySelectorAll('.modal');

function populateDropdown() {
  fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
 .then(response => response.json())
 .then(data => {
      const categories = data.categories;
      categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category.strCategory;
        option.text = category.strCategory;
        formSelect.appendChild(option);
      });
    });
}

formEl.addEventListener('change', function() {
  const selectedIndex = selectEl.selectedIndex;
  const selectedOption = selectEl.options[selectedIndex];
  const selectedText = selectedOption.text;
  console.log(selectedText);

  const apiURL = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedText}`;
  fetch(apiURL)
 .then(response => response.json())
 .then(data => {
      const mealData = data.meals;
      const modalContent = `
        <div class="modal-content">
          ${mealData.slice(0, 3).map(meal => `
            <h4>${meal.strMeal}</h4>
            <a href="results.html?id=${meal.idMeal}">
              <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
            </a>
          `).join('')}
        </div>
      `;


      const modalEl = document.createElement('div');
      modalEl.innerHTML = modalContent;

      const instances = M.Modal.init(elems, {});
      const instance = M.Modal.getInstance(elems[0]);
      instance.open();
      const modalContentEl = instance.el.querySelector('.modal-content');
      modalContentEl.innerHTML = modalContent;
    })
 .catch(error => console.error(error));
});

populateDropdown();

if (window.location.search) {
  grabSpecificMeal();
}