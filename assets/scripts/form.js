const userName = document.querySelector('#user-name');
const blogTitle = document.querySelector('#blog-title');
const blogContent = document.querySelector('#blog-content');
const submitFormButton = document.querySelector('#submit');
const msgDiv = document.querySelector('#displayMsg');
// THEN I am presented with a JSON array of blog post objects,
// each including the post author's username, title of the post, and post's content.


let blogEntriesArr =[];

function displayMessage(type, message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute('class', type);
  }
  
  submitFormButton.addEventListener('click', function (event) {
    
    // create user object from submission

    const storedBLogEnteriesArr = JSON.parse(localStorage.getItem('blogEntries'));
    
    if(storedBLogEnteriesArr !=null){      
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
    const blogInputContent =blogContent.value.trim();
  
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
      blogDetailsObj.username = userInputName;
      blogDetailsObj.blogtitle = blogInputTitle;
      blogDetailsObj.blogcontent = blogInputContent;
      blogEntriesArr.push(blogDetailsObj);
      userName.value = "";
      blogTitle.value ="";
      blogContent.value="";
     

      localStorage.setItem('blogEntries', JSON.stringify(blogEntriesArr));
           
    
    }
   
  });

  function redirectTo(url) {
     window.location.href = url;
     return false;
   }