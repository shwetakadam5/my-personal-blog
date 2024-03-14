const lightModeEl = document.querySelector('.lightmode-button');
const darkModeEl = document.querySelector('.darkmode-button');
const backButtonEl = document.querySelector('.back-button');
const submitButtonEl = document.querySelector('.submit-button');
const headerContainer = document.querySelector('.header-container');
const asideContainer = document.querySelector('.side-container');
const formContainer = document.querySelector('.form-section');
const bodyContainer = document.querySelector('.body-container');
const footerContainer = document.querySelector('.footer-container');
const blogContainer = document.querySelector('.blog-container');


// Function to refresh the local storage and set the default theme to the page.
function loadFromLocalStorage() {
   
    let pageTheme = localStorage.getItem('theme');
    console.log(pageTheme);

    if (pageTheme == null) {
        localStorage.setItem('theme', 'light');
    }

    if(pageTheme == 'dark'){

        console.log("In dark theme");
        lightModeEl.setAttribute('style', 'display: none');
    darkModeEl.setAttribute('style', 'display: inline');

    if (headerContainer != null) {
        headerContainer.classList.add('darkMode');
    }
    if (bodyContainer != null) {
        bodyContainer.classList.add('darkMode');
    }
    if (asideContainer != null) {
        asideContainer.classList.add('darkMode');
    }
    if (formContainer != null) {
        formContainer.classList.add('darkMode');
    }
    if (blogContainer != null) {
        blogContainer.classList.add('darkMode');
    }
    if (footerContainer != null) {
        footerContainer.classList.add('darkMode');
    }
    if (submitButtonEl != null) {
        submitButtonEl.classList.add('darkMode');
    }
    if (backButtonEl != null) {
        backButtonEl.classList.add('darkMode');
    }

    }else{

        console.log("In Light theme");
        lightModeEl.setAttribute('style', 'display: inline');
    darkModeEl.setAttribute('style', 'display: none');

    if (headerContainer != null) {
        headerContainer.classList.remove('darkMode');
    }
    if (bodyContainer != null) {
        bodyContainer.classList.remove('darkMode');
    }
    if (asideContainer != null) {
        asideContainer.classList.remove('darkMode');
    }
    if (formContainer != null) {
        formContainer.classList.remove('darkMode');
    }
    if (blogContainer != null) {
        blogContainer.classList.remove('darkMode');
    }
    if (footerContainer != null) {
        footerContainer.classList.remove('darkMode');
    }
    if (submitButtonEl != null) {
        submitButtonEl.classList.remove('darkMode');
    }
    if (backButtonEl != null) {
        backButtonEl.classList.remove('darkMode');
    }
    }

}


// Attach event listener to light mode button element
lightModeEl.addEventListener('click', function () {

    lightModeEl.setAttribute('style', 'display: none');
    darkModeEl.setAttribute('style', 'display: inline');

    if (headerContainer != null) {
        headerContainer.classList.add('darkMode');
    }
    if (bodyContainer != null) {
        bodyContainer.classList.add('darkMode');
    }
    if (asideContainer != null) {
        asideContainer.classList.add('darkMode');
    }
    if (formContainer != null) {
        formContainer.classList.add('darkMode');
    }
    if (blogContainer != null) {
        blogContainer.classList.add('darkMode');
    }
    if (footerContainer != null) {
        footerContainer.classList.add('darkMode');
    }
    if (submitButtonEl != null) {
        submitButtonEl.classList.add('darkMode');
    }
    if (backButtonEl != null) {
        backButtonEl.classList.add('darkMode');
    }
    console.log("changed theme to dark");
    window.localStorage.setItem('theme', 'dark');
});


// Attach event listener to dark mode button element
darkModeEl.addEventListener('click', function () {

    lightModeEl.setAttribute('style', 'display: inline');
    darkModeEl.setAttribute('style', 'display: none');

    if (headerContainer != null) {
        headerContainer.classList.remove('darkMode');
    }
    if (bodyContainer != null) {
        bodyContainer.classList.remove('darkMode');
    }
    if (asideContainer != null) {
        asideContainer.classList.remove('darkMode');
    }
    if (formContainer != null) {
        formContainer.classList.remove('darkMode');
    }
    if (blogContainer != null) {
        blogContainer.classList.remove('darkMode');
    }
    if (footerContainer != null) {
        footerContainer.classList.remove('darkMode');
    }
    if (submitButtonEl != null) {
        submitButtonEl.classList.remove('darkMode');
    }
    if (backButtonEl != null) {
        backButtonEl.classList.remove('darkMode');
    }
    console.log("changed theme to light");
    window.localStorage.setItem('theme', 'light');
});


// Load existing data from local storage on page load
window.onload = loadFromLocalStorage;





