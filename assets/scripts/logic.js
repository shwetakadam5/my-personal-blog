const lightModeEl = document.querySelector('.lightmode-button');
const darkModeEl = document.querySelector('.darkmode-button');
const backButtonEl = document.querySelector('.back-button');
const submitButtonEl = document.querySelector('.submit-button');
const headerContainer = document.querySelector('.header-container');
const asideContainer = document.querySelector('.side-container');
const formContainer = document.querySelector('.form-section');
const bodyContainer = document.querySelector('.body-container');

// Function to refresh the local storage and set the default theme to the page.
function loadFromLocalStorage() {
    localStorage.clear();

    let pageTheme = localStorage.getItem('theme');
    console.log(pageTheme);

    if (pageTheme == null) {

        localStorage.setItem('theme', 'light');
    }

}


// Attach event listener to light mode button element
lightModeEl.addEventListener('click', function () {
    console.log("In event listerner of light");
    headerContainer.classList.add('darkMode');
    asideContainer.classList.add('darkMode');
    formContainer.classList.add('darkMode');
    bodyContainer.classList.add('darkMode');
    submitButtonEl.classList.add('darkMode');
    lightModeEl.setAttribute('style', 'display: none');
    darkModeEl.setAttribute('style', 'display: inline')
    if (backButtonEl != null) {
        backButtonEl.classList.add('darkMode');
    }



    window.localStorage.setItem('theme', 'dark');
});

// Attach event listener to dark mode button element
darkModeEl.addEventListener('click', function () {
    headerContainer.classList.remove('darkMode');
    asideContainer.classList.remove('darkMode');
    formContainer.classList.remove('darkMode');
    bodyContainer.classList.remove('darkMode');
    submitButtonEl.classList.remove('darkMode');
    darkModeEl.setAttribute('style', 'display: none');
    lightModeEl.setAttribute('style', 'display: inline');
    if (backButtonEl != null) {
        backButtonEl.classList.remove('darkMode');
    }
});

// Load existing data from local storage on page load
window.onload = loadFromLocalStorage;





