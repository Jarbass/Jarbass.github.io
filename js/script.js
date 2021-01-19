//MENU HAMBURGUER
$(document).ready(function () {
    $(".hamburguer").click(function () {
        $(this).toggleClass("active");
        $(".menu").toggleClass("active");
    });
});

//ROTAÇÃO DA SETA
$(document).ready(function () {
    $(".hamburguer").click(function () {
        $(this).toggleClass("active");
        $(".seta").toggleClass("active");
    });
});

//SCROLL
$('.nav a[href^="#"]').on('click', function(e) {
	e.preventDefault();
	var id = $(this).attr('href'),
			targetOffset = $(id).offset().top;
			
	$('html, body').animate({ 
		scrollTop: targetOffset - 100
	}, 500);
});