document.addEventListener('DOMContentLoaded', function () {
    const blogForm = document.getElementById('blogForm');
    const blogContent = document.getElementById('blogContent');
    const blogPosts = document.getElementById('blogPosts');

    blogForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const content = blogContent.value.trim();
        if (content !== '') {
            createBlogPost(content);
            blogContent.value = '';
        }
    });

    function createBlogPost(content) {
        const postDiv = document.createElement('div');
        postDiv.classList.add('blog-post');
        const postContent = document.createElement('p');
        postContent.textContent = content;
        postDiv.appendChild(postContent);
        blogPosts.insertBefore(postDiv, blogPosts.firstChild);
    }
});
function toggleAddBlogForm() {
    var form = document.getElementById("blogForm");
    if (form.style.display === "none") {
        form.style.display = "block";
    } else {
        form.style.display = "none";
    }
}