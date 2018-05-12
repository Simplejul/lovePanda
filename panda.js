//import $ from 'jquery';

$('[data-type="roux"]').css('color','orange');



$ ('.panda').click(function(){
	if ($(this).attr('data-type') == undefined){
		console.log('ni type, ni tendance!');
	}else{
	console.log($(this).attr('data-type') + " & " + $(this).attr('data-tendance'));
	};
});