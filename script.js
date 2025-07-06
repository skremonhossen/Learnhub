function navigate(section) {
  const main = document.getElementById('main-content');
  main.innerHTML = `<h2>${section.toUpperCase()} Page</h2><p>Content will appear here.</p>`;
}
