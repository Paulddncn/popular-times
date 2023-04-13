// Add a click event listener to the "Save" button
$('.save-button').on('click', function() {
    const articleId = $(this).data('id');
  
    // Send a POST request to the server with the article ID
    $.post(`/save/${articleId}`, function(response) {
      // Handle the response from the server
      if (response.message === 'Article saved successfully') {
        alert('Article saved successfully!');
      } else {
        alert('Article already saved!');
      }
    });
  });
  