// Selects element by id from the form
const userName = document.querySelector('#user-name');
const blogTitle = document.querySelector('#blog-title');
const blogContent = document.querySelector('#blog-content');
const submitFormButton = document.querySelector('#submit');
const msgDiv = document.querySelector('#displayMsg');

let blogEntriesArr = [];

//Displays error message
function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute('class', type);
}

// event listener for the submit button on filling up the blog details 
submitFormButton.addEventListener('click', function (event) {

  //retrieves the user blog enteries from the local storage
  const storedBLogEnteriesArr = JSON.parse(localStorage.getItem('blogEntries'));

  if (storedBLogEnteriesArr != null) {
    blogEntriesArr = storedBLogEnteriesArr;
  }

  const blogDetailsObj = {
    username: "",
    blogtitle: "",
    blogcontent: "",
  };

  msgDiv.textContent = "";
  msgDiv.removeAttribute('class');

  const userInputName = userName.value.trim();
  const blogInputTitle = blogTitle.value.trim();
  const blogInputContent = blogContent.value.trim();

  if (userInputName === '') {
    displayMessage('error', 'User cannot be blank');
    event.preventDefault();
  } else if (blogInputTitle === '') {
    displayMessage('error', 'Title cannot be blank');
    event.preventDefault();
  } else if (blogInputContent === '') {
    displayMessage('error', 'Content cannot be blank');
    event.preventDefault();
  } else {
    // create user object and array from submission
    blogDetailsObj.username = userInputName;
    blogDetailsObj.blogtitle = blogInputTitle;
    blogDetailsObj.blogcontent = blogInputContent;
    blogEntriesArr.push(blogDetailsObj);
    userName.value = "";
    blogTitle.value = "";
    blogContent.value = "";

    //Sets the user blog enteries into local storage
    localStorage.setItem('blogEntries', JSON.stringify(blogEntriesArr));

  }

});

// On successful submission the user moves to the blog page
function redirectTo(url) {
  window.location.href = url;
  return false;
}