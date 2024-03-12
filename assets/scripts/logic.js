const lightModeEl = document.querySelector('.lightmode-button');
const darkModeEl = document.querySelector('.darkmode-button');
const toggleButtonEl = document.querySelector('.toggle-button');
const headerContainer = document.querySelector('.header-container');
const backButtonEl =document.querySelector('.back-button');

const pageTheme = localStorage.getItem('theme');

if(pageTheme == null){
    localStorage.setItem('theme', 'light');
}


// Attach event listener to light mode button element
lightModeEl.addEventListener('click', function () {
    console.log("In event listerner of light");
    headerContainer.classList.add('darkMode');  

    lightModeEl.setAttribute('style','display: none');    
    darkModeEl.setAttribute('style','display: inline')
    if(backButtonEl != null){
    backButtonEl.classList.add('darkMode');
}

    window.localStorage.setItem('theme','dark');
  });


  darkModeEl.addEventListener('click', function () { 
    headerContainer.classList.remove('darkMode');   
    darkModeEl.setAttribute('style','display: none');
    lightModeEl.setAttribute('style','display: inline');
    if(backButtonEl != null){
    backButtonEl.classList.remove('darkMode');
    }
  });


//   toggleButtonEl.addEventListener('click', function () {
//     console.log("In event listerner of light");
//     backButtonEl.classList.add('darkMode');
//     localStorage.setItem('theme', dark);

    
//   });


  
