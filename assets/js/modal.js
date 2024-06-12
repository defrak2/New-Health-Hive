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