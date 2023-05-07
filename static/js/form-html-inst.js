let allFormTags = document.querySelectorAll('form');
function handleForm(event) { event.preventDefault();} 
allFormTags.forEach((form) =>{
    form.addEventListener('submit', handleForm);
})
