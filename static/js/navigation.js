const mainNavigation = document.querySelectorAll('.header-main-nav-list li');

mainNavigation.forEach(link =>{
    link.addEventListener('click', function(event){
        event.preventDefault();

        // remove active class from all links
        mainNavigation.forEach( link =>{
            link.classList.remove('active');
        });

        // add active class to clicked link
        this.classList.add('active');
    });
});
