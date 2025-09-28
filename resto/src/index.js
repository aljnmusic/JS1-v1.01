document.addEventListener('DOMContentLoaded', function () {
    const burger = document.querySelector('#burger');
    const menu = document.querySelector('#menu');
  
    burger.addEventListener('click', () => {
      // Toggle the visibility of the menu
      menu.classList.toggle('hidden');
    });
  });  