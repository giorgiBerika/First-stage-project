const bookTripButton = document.getElementById('book-trip-btn');
const bookTripForm = document.querySelector('.book-trip-modal');


bookTripButton.addEventListener('click', () =>{
    bookTripForm.style.display = 'inline-block';

});

bookTripForm.addEventListener(
    "click", function(event) {
      if (
        event.target.matches(".close-bookt-modal") ||
        !event.target.closest(".book-trip-modal-inner")
      ) {
        closeModalMessage();
        
      }
    },
    false
  )
;
// General function logic of to close modal 
  function closeModalMessage() {
    bookTripForm.style.display = "none"
  };