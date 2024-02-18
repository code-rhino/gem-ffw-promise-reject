const axios = require('axios');

function fetchPost(postId) {
    if (!postId) {
      // Reject the promise if postId is not provided
      return Promise.reject('Post ID is required');
    }
    return axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  }

  fetchPost(1)
  .then(response => console.log(response.data))
  .catch(error => console.error(error));

  fetchPost()
  .then(response => console.log(response.data))
  .catch(error => console.error(error)); // This will log 'Post ID is required'


  function checkIfPostEditable(postId) {
    return axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(response => {
        const post = response.data;
        if (post.userId === 1) {
          // Resolve the promise if the post is editable
          return Promise.resolve(true);
        } else {
          // Reject the promise if the post is not editable
          return Promise.reject(false);
        }
      });
  }

checkIfPostEditable(1)
  .then(editable => console.log(`Is editable: ${editable}`))
  .catch(editable => console.error(`Is editable: ${editable}`));
