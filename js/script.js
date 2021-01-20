//MENU HAMBURGUER
const menuIcon = document.querySelector(".hamburguer-menu");
const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".navbar-hamburguer");

menuIcon.addEventListener("click", function() {
    navbar.classList.toggle("change");
    menu.classList.toggle("change");
});


//SUAVIZAR SCROLL
$('.nav a[href^="#"]').on('click', function(e) {
	e.preventDefault();
	var id = $(this).attr('href'),
			targetOffset = $(id).offset().top;
			
	$('html, body').animate({ 
		scrollTop: targetOffset - 100
	}, 500);
});

//SCROLL PARA O MENU DESAPARECER
function scrollBanner() {
    var scrollPos;
    var menuHamburguer = document.querySelector(".hamburguer-menu");
    var menuBackground = document.querySelector(".navbar-hamburguer");

    scrollPos = window.scrollY;

    if(scrollPos <= 600) {
        menuHamburguer.style.transform = "translateY(" + (-scrollPos/3) +"px" + ")";
        menuHamburguer.style.opacity = 1 - (scrollPos/10);
        menuBackground.style.opacity = 1 - (scrollPos/10);
    }
}

window.addEventListener("scroll", scrollBanner);