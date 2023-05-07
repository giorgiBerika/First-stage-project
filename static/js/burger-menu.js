const closedBurgerMenu = document.querySelector('.closed-burger');
const openedBurgerMenu = document.querySelector('#opened-burg-menu');
const burgerMenuList = document.querySelectorAll('.opened-burger-nav-list li');

// Close burger whenever one of the list elements becomes clicked
burgerMenuList.forEach(function(eachList){
    eachList.addEventListener('click', function(){
        openedBurgerMenu.classList.toggle('collapse-burger');
    });
})
// Open/Close burger menu by click on the icon
closedBurgerMenu.addEventListener('click', function(){
    openedBurgerMenu.classList.toggle('collapse-burger');
});