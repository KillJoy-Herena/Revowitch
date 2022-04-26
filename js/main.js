// codigo para el boton y mostrar menu
document.querySelector(".menu-btn").addEventListener("click", () => {
    document.querySelector(".menu").classList.toggle("show");
  });
document.querySelector(".menu_link").addEventListener("click", () => {
    document.querySelector(".menu").classList.toggle("hide");
}); 
  
  
  // Aqui codigo para el efecto del scroll (scrollReval)
  ScrollReveal().reveal('.showcase');
  ScrollReveal().reveal('.news-cards', { delay: 500 });
  ScrollReveal().reveal('.sobreRWitch', { delay: 500 });
  ScrollReveal().reveal('.cards-banner-two', { delay: 500 });

  //incializacion para glider.js

  window.addEventListener('load',function(){
    new Glider(document.querySelector('.carousel__lista'),{
      slidesToShow: 2,
      slidesToSroll: 1,
      draggable: true,
      dots: '.dots',
    
      responsive: [
        {
          // screens greater than >= 775px
          breakpoint: 800,
          settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: 2,
            slidesToScroll: 1,
          
          }
        },{
          // screens greater than >= 1024px
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            itemWidth: 120,
            duration: 0.25
          }
        }
      ]
      });
     });