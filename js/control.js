$(document).ready(function(){
    $("#theme").click(function(){
        $(this).toggleClass("bi-brightness-high");
        $("body").toggleClass("active");
    });
});
$(document).ready(function(){
    $("#menu").click(function(){
        $(this).toggleClass("bi-x");
        $(".header").toggleClass("active");
    });
    $(window).scroll(function(){
        $("#menu").removeClass("bi-x");
        $(".header").removeClass("active");
    });
});

const currentYear= new Date().getFullYear();
document.getElementById("age").innerHTML= currentYear-2001 ;