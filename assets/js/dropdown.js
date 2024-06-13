
const formSelect = document.getElementById('form-select-6');
const cuisineList = document.getElementById('cuisine-list');

// Fetch categories and populate the select element
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

// formSelect.addEventListener('change', function() {
//   const categoryId = this.value;
//   // Fetch cuisines for selected category
//   fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryId}`)
//    .then(response => response.json())
//    .then(data => {
//       const cuisines = data.meals;
//       // Display the cuisines in the #cuisine-list div
//       cuisineList.innerHTML = '';
//       cuisines.forEach(cuisine => {
//         const listItem = document.createElement('li');
//         listItem.textContent = cuisine.strMeal;
//         cuisineList.appendChild(listItem);
//       });
//     });
// });