
$(document).ready(function () {
	
 	$('#botao').click(function(){
		var nome = $("#nome").val();
		var mensagem = $("#mensagem").val();
	
	$('#dialog').html( "<strong> A mensagem: </strong>" + mensagem + " <strong> do Sr.(a) </strong>" + nome + " <strong> foi enviada a deadpool@gmail.com </strong>");


 	$('#dialog').dialog("open")	;

 		
	});
	
	
	   		
	$('#dialog')
		.dialog({ 
			title: 'Mensagem Enviada',
			draggable: false,
			resizable: false,
			closeOnEscape: false,
			modal: true,
			autoOpen: false,
			buttons: {
        		"Okay": function() {
          		$( this ).dialog( "close");
        		}
			}	
		});		
 });	