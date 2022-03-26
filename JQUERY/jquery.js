
//Creamos la Funcion del acordeon
$(document).ready(function() {
  $(".Colocar > a").on("click", function() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this)
        .siblings(".Acordion")
        .slideUp(200);
      $(".Colocar > a i")
        .removeClass("fa-menos")
        .addClass("fa-mas");
    } else {
      $(".Colocar > a i")
        .removeClass("fa-menos")
        .addClass("fa-mas");
      $(this)
        .find("i")
        .removeClass("fa-mas")
        .addClass("fa-menos");
      $(".Colocar > a").removeClass("active");
      $(this).addClass("active");
      $(".Acordion").slideUp(200);
      $(this)
        .siblings(".Acordion")
        .slideDown(200);
    }
  });
});



//Creamos la Funcion del formulario de validacción














