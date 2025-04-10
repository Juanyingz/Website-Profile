// Toggle & Responsive Navigation
const navSlide = () => {
    const ayam = document.querySelector(".ayam");
    const navLists = document.querySelector("nav");
  
    ayam.addEventListener("click", () => {
      // Toggle nav list and ayam class
      navLists.classList.toggle("nav-active");
      ayam.classList.toggle("toggle-ayam");
    });
  };
  
  navSlide();
  
  // Clear form before unload
  window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")) {
      form.reset();
    }
  };

  document.querySelectorAll('.nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href'); 
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, 
                behavior: 'smooth'
            });
        }
    });
});
