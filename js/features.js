// Change location functionality
document.addEventListener('DOMContentLoaded', function () {
 const blogButton = document.getElementById('blog-button');
 if (blogButton) {
  blogButton.addEventListener('click', function (event) {
   event.preventDefault();
   window.location.href = 'blog.html';
  });
 } else {
  console.error('Element with ID "blog-button" not found.');
 }

 const homeButton = document.getElementById('home-button');
 if (homeButton) {
  homeButton.addEventListener('click', function (event) {
   event.preventDefault();
   window.location.href = 'index.html';
  });
 } else {
  console.error('Element with ID "home-button" not found.');
 }
});


// Section show functionality
document.getElementById('donation-show-button')
 .addEventListener('click', function () {
  showSectionById('donation-area');
 });

document.getElementById('history-show-button')
 .addEventListener('click', function () {
  showSectionById('donation-history');
 });

 // Button color change functionality
document.getElementById('donation-show-button')
 .addEventListener('click', function () {
  changeColorById('donation-show-button');
 });
document.getElementById('history-show-button')
 .addEventListener('click', function () {
  changeColorById('history-show-button');
 });

