$(function(){
		
	
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

//------------------------------------------------------------	

	$(".button-collapse").sideNav();

//-----------------------------------------------------------

	  $(document).ready(function(){
      $('.parallax').parallax();
    });

});		



	
