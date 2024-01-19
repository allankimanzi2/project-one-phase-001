document.addEventListener('DOMContentLoaded', function () {
  const turfCards = document.querySelectorAll('.turf-card');

  turfCards.forEach(card => {
      card.addEventListener('click', function () {
          // Toggle the availability status
          const statusElement = this.querySelector('.status');
          statusElement.textContent = (statusElement.textContent === 'Available') ? 'Unavailable' : 'Available';
      });
  });
});

async function postComment() {
  var commentText = document.getElementById('commentText').value;

  if (commentText.trim() !== '') {
      try {
          // Post the comment to JSONPlaceholder
          const response = await fetch('https://jsonplaceholder.typicode.com/comments', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                  postId: 1, // You can adjust this based on your needs
                  name: 'User', // You can use the actual username here
                  email: 'user@example.com', // You can use the actual email here
                  body: commentText,
              }),
          });

          const newComment = await response.json();

          // Display the new comment
          displayComment(newComment);

          // Optionally, you can clear the textarea after posting the comment.
          document.getElementById('commentText').value = '';
      } catch (error) {
          console.error('Error posting comment:', error);
      }
  } else {
      alert('Please enter a comment before posting.');
  }
}

// Rest of your code remains unchanged...
async function fetchComments() {
  // Fetch comments from JSONPlaceholder
  const response = await fetch('https://jsonplaceholder.typicode.com/comments?postId=1'); // Adjust postId if needed
  const comments = await response.json();

  // Display comments
  comments.forEach(comment => {
      displayComment(comment);
  });
}

// Fetch comments when the page loads
document.addEventListener('DOMContentLoaded', function () {
  fetchComments();
});

function addComment() {
  const commentInput = document.getElementById('commentInput');
  const commentList = document.getElementById('commentList');
  const commentText = commentInput.value;
}
  if (commentText) {
      const commentItem = document.createElement('li');
      commentItem.textContent = commentText;
      commentList.appendChild(commentItem);
      commentInput.value = ''; // Clear the input field after adding the comment
  }
