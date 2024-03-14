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
    //event.preventDefault();
    // create user object from submission

    const storedBLogEnteriesArr = JSON.parse(localStorage.getItem('blogEntries'));
    console.log("storedBLogEnteriesArr");
    console.log(storedBLogEnteriesArr);
    if(storedBLogEnteriesArr !=null){
      console.log("in storedBLogEnteriesArr not null check")
    blogEntriesArr = storedBLogEnteriesArr;
    }

    console.log("blogEntriesArr");
    console.log(blogEntriesArr);

    const blogDetailsObj = {
    username: "",
    blogtitle: "",
    blogcontent: "",
    };
  
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
      displayMessage('success', 'Submitted successfully');
      
      blogDetailsObj.username = userInputName;
      blogDetailsObj.blogtitle = blogInputTitle;
      blogDetailsObj.blogcontent = blogInputContent;
      blogEntriesArr.push(blogDetailsObj);
      userName.value = "";
      blogTitle.value ="";
      blogContent.value="";

      localStorage.setItem('blogEntries', JSON.stringify(blogEntriesArr));
      console.log( JSON.parse(localStorage.getItem('blogEntries')));
      
        for (const element of  JSON.parse(localStorage.getItem('blogEntries'))) {
        console.log(element);        
      }          

    }
  });