$(function(){
			
	




	/*-------------------------*/	

	$('.botoes-jq').css({margin: "20px"});

	$('#botao-play')
		.css({margin: "10px"}); 

	$('#botao-pause')
		.css({margin: "10px"});

	$('#botao-stop')
		.css({margin: "10px"});	

	/*-------------------------*/
	

	$("#botao-play").mousedown(function(){
		$(this).attr("src","imagens/pause.png");
		
	}).mouseup(function(){
		$(this).attr("src","imagens/play.png");
	});			
	$("#botao-play").mouseenter(function(){
		$(this).attr("src","imagens/play1.png");
		
	}).mouseout(function(){
		$(this).attr("src","imagens/play.png");
	});				

	$("#botao-pause").mousedown(function(){
		$(this).attr("src","imagens/play.png");
	
	}).mouseup(function(){
		$(this).attr("src","imagens/pause.png");
	});
	$("#botao-pause").mouseenter(function(){
		$(this).attr("src","imagens/pause1.png");

	}).mouseout(function(){
		$(this).attr("src","imagens/pause.png");
	});								

	$("#botao-stop").mousedown(function(){
		$(this).attr("src","imagens/play.png");
		
	}).mouseup(function(){
		$(this).attr("src","imagens/stop.png");
	});
	$("#botao-stop").mouseenter(function(){
		$(this).attr("src","imagens/stop1.png");
		
	}).mouseout(function(){
		$(this).attr("src","imagens/stop.png");
	});		

	/*----------------------------------*/
	

	$('#botao-play').click(function(){
		$("#video").trigger('play');
	});
	$('#botao-pause').click(function(){
		$("#video").trigger('pause');
	});
	$('#botao-stop').click(function(){
		document.getElementsByTagName('video')[0].currentTime = 0;
  		document.getElementsByTagName('video')[0].pause();
	});				

	$("#video").keyup(function(){
		if((this).val("c")){
			document.getElementsByTagName('video')[0].play();
		}
	});
		

});			