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