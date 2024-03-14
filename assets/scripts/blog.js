const blogList = document.querySelector('#blog-list');
let displayBlogsArr = [];
let blogDetailsObj = {
  username: "",
  blogtitle: "",
  blogcontent: "",
};


// The following function renders items in a blog enteries array as <li> elements /DOM elements
function renderBlogEntries() {

  // Clear blog-list element Please check this check
  if (blogList != null) {
    blogList.innerHTML = '';
  }
  console.log(displayBlogsArr);
  // Render a new li for each blog in the follwing format
  // <ul>
  //         <li>
  //             <section class ="blog-entry-details">
  //             <h5>BLOG TITLE</h5>
  //             <p>
  //                 My content
  //             </p>
  //             <br>
  //             <p><span>Posted by:</span>Username</p>
  //         </section>
  //         </li>
  //     </ul>   
  for (let i = 0; i < displayBlogsArr.length; i++) {

    const blogDetailsObj = displayBlogsArr[i];  

    //creating the dom elements dynamically based on the user enteries
    const li = document.createElement('li');
    const sectionEl = document.createElement('section');
    sectionEl.setAttribute('class', 'blog-entry-details');
    li.appendChild(sectionEl);

    const blogHeaderEl = document.createElement('h5');
    blogHeaderEl.textContent = blogDetailsObj.blogtitle;
    sectionEl.appendChild(blogHeaderEl);

    const blogParagraphEl = document.createElement('p');
    blogParagraphEl.textContent = blogDetailsObj.blogcontent;
    sectionEl.appendChild(blogParagraphEl);

    const linebreakEl = document.createElement('br');
    sectionEl.appendChild(linebreakEl);

    const blogParagraph2El = document.createElement('p');

    blogParagraph2El.textContent = "Posted by:" + blogDetailsObj.username;
    sectionEl.appendChild(blogParagraph2El);

    li.setAttribute('data-index', i);
    if (blogList != null) {
      blogList.appendChild(li);
    }
  }
}

// function to restore the user values from local storage
function init() {
  const storedBlogEntries = JSON.parse(localStorage.getItem('blogEntries'));

  // If blog entries were retrieved from localStorage, update the displayBlogsArr array to it
  if (storedBlogEntries !== null) {
    displayBlogsArr = storedBlogEntries;
  }

  // This is a helper function that will render blogs to the DOM
  renderBlogEntries();
}

//invoked when page is loaded
init();