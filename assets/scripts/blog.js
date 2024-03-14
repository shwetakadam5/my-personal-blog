const blogList = document.querySelector('#blog-list');
let displayBlogsArr =[];

// The following function renders items in a blog enteries array as <li> elements
function renderBlogEntries() {
    
    // Clear blog-list element 
    blogList.innerHTML = '';    
  console.log(displayBlogsArr);
    // Render a new li for each blog
    for (let i = 0; i < displayBlogsArr.length; i++) {
      const blog = displayBlogsArr[i];
  console.log(blog);
      const li = document.createElement('li');
      li.textContent = blog;
      li.setAttribute('data-index', i);      
      
      blogList.appendChild(li);
    }
  }

  function init() {
    // Get stored blog entries from localStorage

    // console.log( JSON.parse(localStorage.getItem('blogEntries')));
      
    //     for (const element of  JSON.parse(localStorage.getItem('blogEntries'))) {
    //     console.log(element);        
    //   }    


    const storedBlogEntries = JSON.parse(localStorage.getItem('blogEntries'));
  
    // If blog entries were retrieved from localStorage, update the displayBlogsArr array to it
    if (storedBlogEntries !== null) {
        displayBlogsArr = storedBlogEntries;
    }
  
    // This is a helper function that will render blogs to the DOM
    renderBlogEntries();
  }

  init();