document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.querySelector('.search-input');
  const searchButton = document.querySelector('.search-button');

  if (searchButton && searchInput) {
    const handleSearch = () => {
      const value = searchInput.value.trim();
      if (!value) {
        searchInput.focus();
        return;
      }
      searchButton.setAttribute('aria-label', `Searching for ${value}`);
      searchButton.textContent = 'Search';
    };

    searchButton.addEventListener('click', handleSearch);
    searchInput.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        handleSearch();
      }
    });
  }
});
