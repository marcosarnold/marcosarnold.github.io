// Load header
fetch('ribbons/header.html')
    .then(response => response.text())
    .then(data => document.getElementById('header-placeholder').innerHTML = data);

// Load footer
fetch('ribbons/footer.html')
    .then(response => response.text())
    .then(data => document.getElementById('footer-placeholder').innerHTML = data);