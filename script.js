document.addEventListener('DOMContentLoaded', function () {
  const searchDiv = document.querySelector('.search');
  const searchInput = document.querySelector('.input');
  const searchBtn = document.querySelector('.btn');

  searchBtn.addEventListener('click', function () {
    searchDiv.classList.add('active');
    searchInput.focus();
  });
});
