console.log("Safari Ride site loaded successfully!");

document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
      navLinks.classList.toggle('active');
    });

    document.addEventListener('click', function(event) {
      const isClickOnMenu = navLinks.contains(event.target);
      const isClickOnBtn = mobileMenuBtn.contains(event.target);

      if (!isClickOnMenu && !isClickOnBtn && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
      }
    });

    const navItems = navLinks.querySelectorAll('a');
    navItems.forEach(item => {
      item.addEventListener('click', function() {
        navLinks.classList.remove('active');
      });
    });
  }
});
