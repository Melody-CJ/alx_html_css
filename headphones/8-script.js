const toggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('navigation');

  toggle.addEventListener('click', () => {
    nav.classList.toggle('show');
    // Toggle the icon between bars and X
    toggle.innerHTML = nav.classList.contains('show')
      ? '<i class="fas fa-times"></i>'
      : '<i class="fas fa-bars"></i>';
  });