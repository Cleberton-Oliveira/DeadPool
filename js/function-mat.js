
$(document).ready(function(){
	
	$('#play').click(function(){
		$("#video").trigger('play');
	});
	$('#pause').click(function(){
		$("#video").trigger('pause');
	});
	$('#stop').click(function(){
		document.getElementsByTagName('video')[0].currentTime = 0;
  		document.getElementsByTagName('video')[0].pause();
	});				

//-------Dispositivo Mobile-----------------------------------

	$('#play2').click(function(){
		$("#video").trigger('play');
	});
	$('#pause2').click(function(){
		$("#video").trigger('pause');
	});
	$('#stop2').click(function(){
		document.getElementsByTagName('video')[0].currentTime = 0;
  		document.getElementsByTagName('video')[0].pause();
	});	
//------------------------------------------------------------	

	$(".button-collapse").sideNav();
	
	$('.parallax').parallax();
    
	
//------------------------------------------------------------
//Carousel

	$('.carousel').carousel({
		fullWidth: true
	});

// Proxima / Anterior 

	$('.next').click(function(){
		$('.carousel').carousel('next');
	});
	$('.prev').click(function(){
		$('.carousel').carousel('prev');
	});

//--------------------------------------------------------------
// Fale Conosco 

 	$('#botao').click(function(){
		var nome = $("#nome").val();
		var mensagem = $("#mensagem").val();
	
	$('.modal')
	.html("<strong> A mensagem: </strong>" + mensagem + "<strong> do Sr.(a) </strong>" + nome + " <strong> foi enviada a deadpool@gmail.com </strong>");
	});

 	$('.modal').modal();
});



	 