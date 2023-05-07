
// Generate cards
const thirdSectionCardsContainer = document.querySelector('.video-data-section-data-inner');

const dataCardsObjectArray = 
[
  {
    cardImg: '1',
    dataNumber: 120859,
    dataTitle: 'HAPPY TRAVELLERS'
  },
  {
    cardImg: '2',
    dataNumber: 2594,
    dataTitle: 'SATISFIED TOURS'
  },
  {
    cardImg: '3',
    dataNumber: 854,
    dataTitle: 'DESTINATION'
  },
  {
    cardImg: '4',
    dataNumber: 978,
    dataTitle: 'HOTELS $ RESORTS'
  }
];

let htmlDataCodeCardsContainer = ``;

dataCardsObjectArray.forEach(function(singleObject){
  htmlDataCodeCardsContainer +=
  `
             <div class="video-data-section-data-card">
                    <img src="static/images/third-section-images/third-section-data-images/card-image-${singleObject.cardImg}.png" alt="">
                    <span>${singleObject.dataNumber.toLocaleString()}</span>
                    <h4>${singleObject.dataTitle}</h4>
             </div>
  `;
});
thirdSectionCardsContainer.innerHTML += htmlDataCodeCardsContainer;


const dataContainer = document.querySelector('#video-data-section');

// const thirdSectionPosition = dataContainer.offsetTop;
const generatedDataCardList = document.querySelectorAll('.video-data-section-data-card');

let increment = 1;
const interval = 0.1;


let operationDone = false;

if (localStorage.getItem('operationDone') === 'true') {
  operationDone = true;
} else {
  window.addEventListener('scroll', () =>{
    if (operationDone) return;

    const thirdSectionPosition = dataContainer.offsetTop;

    const scrollPosition = window.scrollY;
  
    if (scrollPosition >= thirdSectionPosition) {
  
      generatedDataCardList.forEach((eachCard, index) =>{
  
        let currentNumber = 0;
  
        const intervalId = setInterval(() => {
          currentNumber += increment;
          eachCard.getElementsByTagName('span')[0].textContent = currentNumber.toLocaleString();
  
          let targetNumber = dataCardsObjectArray[index].dataNumber;
          if (currentNumber >= targetNumber) {
            clearInterval(intervalId);
          }
        }, interval);
      });
  
      operationDone = true;
      localStorage.setItem('operationDone', 'true');
    }
  });
}

// Clear the value of 'operationDone' from localStorage
localStorage.removeItem('operationDone');


// section1.scrollIntoview({behavior: 'smooth'});