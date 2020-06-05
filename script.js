$(function() {
	$(window).scroll(function() {
	  //untuk mengetahui nilai jarak scroll dari window
	  var wScroll = $(this).scrollTop();

	  $('#fotoUtama').css({
	  	'transform' : 'translate(0px, '+ wScroll/6 +'%)'
	  });

	});

	$('#foto1').click(function() {
		$('#modalFoto1').attr("src", "img/laptop 1.png");
	});

	$('#foto2').click(function() {
		$('#modalFoto1').attr("src", "img/laptop 2.jpg");
	});

	$('#foto3').click(function() {
		$('#modalFoto1').attr("src", "img/laptop 3.jpg");
	});

	$('#foto4').click(function() {
		$('#modalFoto1').attr("src", "img/laptop 4.jpg");
	});

	$('#foto5').click(function() {
		$('#modalFoto1').attr("src", "img/laptop 5.jpg");
	});

	$('#foto6').click(function() {
		$('#modalFoto1').attr("src", "img/laptop 6.jpg");
	});

	$('#foto7').click(function() {
		$('#modalFoto1').attr("src", "img/laptop 7.jpg");
	});

	$('#foto8').click(function() {
		$('#modalFoto1').attr("src", "img/laptop 8.jpg");
	});

	$('#foto9').click(function() {
		$('#modalFoto1').attr("src", "img/laptop 9.jpg");
	});

});