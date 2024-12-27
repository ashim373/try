document.getElementById('create-post-btn').addEventListener('click', () => {
    window.location.href = 'editor.html'; // Redirect to editor for creating new posts
  });
  
  document.getElementById('edit-posts-btn').addEventListener('click', () => {
    displayPostList();
  });
  
  function displayPostList() {
    const postListSection = document.getElementById('post-list');
    const postsContainer = document.getElementById('posts-container');
  
    // Mock posts fetched from localStorage
    const posts = JSON.parse(localStorage.getItem('blogs')) || [];
  
    if (posts.length === 0) {
      postsContainer.innerHTML = '<p>No posts available. Create one first!</p>';
    } else {
      postsContainer.innerHTML = '';
      posts.forEach((post, index) => {
        const li = document.createElement('li');
        li.textContent = post.title;
        li.addEventListener('click', () => {
          editPost(index);
        });
        postsContainer.appendChild(li);
      });
    }
  
    postListSection.style.display = 'block';
  }
  
  function editPost(index) {
    const posts = JSON.parse(localStorage.getItem('blogs')) || [];
    const postToEdit = posts[index];
  
    if (postToEdit) {
      // Save post index to session storage for editing
      sessionStorage.setItem('editPostIndex', index);
      window.location.href = 'editor.html'; // Redirect to editor
    }
  }
  