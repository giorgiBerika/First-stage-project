// Get some necessary object from document
const cardsContainer = document.querySelector('.hot-services-section-cards-container');
const cardsModal = document.querySelector('.hot-services-section-cards-modal');
// Array of objects with some key-value pairs
const cardsObjectArray = 
[
    {
        cardImage: '1',
        cardName: 'FLIGHT BOOKING',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem."
    },
    {
        cardImage: '2',
        cardName: 'HOTEL & RESORT BOOKING',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem."
    },
    {
        cardImage: '3',
        cardName: 'FAMILY TRIP PLANNER',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem."
    },
    {
        cardImage: '4',
        cardName: 'CRUISE TOUR',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem."
    },
    {
        cardImage: '5',
        cardName: 'FIRE CAMP',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem."
    },
    {
        cardImage: '6',
        cardName: 'CORPORATE HOLIDAYS',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem."
    }
]

// Define empty html code
let htmlCardsContainer = ``;

// Creating function and logic within it in order to generate cards
let generateCards = function(newHtml, array)
{
// Creating new cards 
array.forEach(function(singleCardsObject){
    newHtml +=
    `
        <div id = "card-${singleCardsObject.cardID}" class="hot-services-section-card">
            <img src="static/images/second-section-images/second-section-right/second-section-right-img-${singleCardsObject.cardImage}.png" alt="Plane image">
            <h2>${singleCardsObject.cardName}</h2>
            <p>${singleCardsObject.description}</p>
        </div>
    `;
});
    cardsContainer.innerHTML += newHtml;

}

// Call function to generate Hot Services section cards
generateCards(htmlCardsContainer, cardsObjectArray);

// Already Generated cards list
const completeCardsList = document.querySelectorAll('.hot-services-section-card');

let modalImage = document.querySelector('.hot-services-section-modal-inner img');
let modalTitle = document.querySelector('.hot-services-section-modal-inner h2');
let modalDescript = document.querySelector('.hot-services-section-modal-inner p');


// Adding some function on each card with forEach() method
completeCardsList.forEach((eachCard, index) =>{
    
    eachCard.addEventListener('click', ()=>{
        // Get appropriate data from cardsObjectArray
        let modalNewImage = cardsObjectArray[index].cardImage;
        let modaNewTitle = cardsObjectArray[index].cardName;
        let modalDescrip = cardsObjectArray[index].description;
        // change Modal's image and Title
        modalImage.src = "static/images/second-section-images/second-section-right/second-section-right-img-"+modalNewImage+".png";
        modalTitle.innerHTML = modaNewTitle;
        modalDescript.innerHTML = modalDescrip;
        // Change display of modal, Open it
        cardsModal.style.display = "inline-block";

    });
});
// Logic for a function to close modal by click on a X btn or near area of container
document.querySelector(".hot-services-section-cards-modal").addEventListener(
    "click", function(event) {
      if (
        event.target.matches(".hot-services-section-close-modal") ||
        !event.target.closest(".hot-services-section-modal-inner")
      ) {
        closeModal();
        
      }
    },
    false
  )
;
// General function logic of to close modal 
  function closeModal() {
    document.querySelector(".hot-services-section-cards-modal").style.display = "none"
  };
