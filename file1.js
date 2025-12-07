function filterCategory(category) {
  const items = document.querySelectorAll('.item');
  items.forEach(item => {
    if (category === 'all' || item.classList.contains(category)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

// Live search
document.getElementById('searchBar').addEventListener('keyup', function() {
  const query = this.value.toLowerCase();
  const items = document.querySelectorAll('.item');
  items.forEach(item => {
    if (item.textContent.toLowerCase().includes(query)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
});