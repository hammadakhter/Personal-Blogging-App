document.addEventListener("DOMContentLoaded", function () {
    const blogForm = document.getElementById("blogForm");
    const publishBtn = document.getElementById("publishBtn");
    const blogPosts = document.getElementById("blogPosts");
  
    publishBtn.addEventListener("click", function () {
      const titleInput = document.getElementById("title");
      const descriptionInput = document.getElementById("description");
  
      const title = titleInput.value;
      const description = descriptionInput.value;
      const date = new Date();
  
      if (title && description) {
        const blogBox = document.createElement("div");
        blogBox.classList.add("blog-box");
        blogBox.innerHTML = `<h2>Title : ${title}</h2><p>Description : ${description}</p>`;
        blogPosts.appendChild(blogBox);
        
  
        titleInput.value = "";
        descriptionInput.value = "";
      }
      else{
        alert("please add some words")
      }
    });
  });
  