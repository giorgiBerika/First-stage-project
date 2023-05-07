const apiCardsContainer = document.querySelector('.famous-books-cards-container');
let cardsHtmlCode = ``;
fetch('https://fakerapi.it/api/v1/books?_quantity=6')
  .then(response => response.json())
  .then(data => {
    data.data.forEach(book => {
      cardsHtmlCode +=
      `
      <div class="famous-books-card">
                            <img src="${book.image + book.id}" alt="Book's image">
                            <div class="books-description-div">
                                <div>
                                    <span>Author:</span>
                                    <h2 class="books-author">${book.author}</h2>
                                </div>
                                <div>
                                    <span>Title:</span>
                                    <h3 class="books-title">${book.title}</h3>
                                </div>
                                <div>
                                    <span>Genre:</span>
                                    <h3 class="books-genre">${book.genre}</h3>
                                </div>
                                <p class="books-description">${book.description}</p>
                            </div>
                        </div>
      `;
    });
    if (apiCardsContainer) {
        apiCardsContainer.innerHTML += cardsHtmlCode;
    } else {
        console.error("Element with class famous-books-cards-container not found");
    }
    
  });