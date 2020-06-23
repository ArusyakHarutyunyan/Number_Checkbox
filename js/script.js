$('input[name="number"]').on('click', function(){
	if($(this).is(':checked')){
    	alert($(this).attr('value'));
	}
});