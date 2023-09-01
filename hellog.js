
const  blogTitle = document.getElementsByClassName("blog-title").value;
const  blogPosterName = document.getElementsByClassName("blog-poster-name").value;
const  blogPostDate = document.getElementsByClassName("blog-post-date").value;
const  blogParagraph = document.getElementsByClassName("blog-paragraph").value;


document.addEventListener("DOMContentLoaded", function () {
    const publishBtn = document.getElementsByClassName("publishBtn");
    const blogPosts = document.getElementsByClassName("blogPosts");


    publishBtn.addEventListener("click", poster ());

     function poster () {
        const titleInput = document.getElementById("title");
        const descriptionInput = document.getElementById("description");

        const title = titleInput.value;
        const description = descriptionInput.value;
        if (title && description) {
            const blogBox = document.createElement("div");
            blogBox.classList.add("blog-box");
            blogBox.innerHTML = `<h2>${title}</h2><p>${description}</p>`;
            blogPosts.appendChild(blogBox);

            titleInput.value = "";
            descriptionInput.value = "";
          }

    };
});
 



