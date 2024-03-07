//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function() {
  var searchButton = document.getElementById('searchButton');
  var searchContainer = document.getElementById('searchContainer');
  var searchInput = document.getElementById('searchInput');
  
  searchButton.addEventListener('click', function() {
    searchContainer.classList.add('active');
    searchInput.focus();
  });
});
