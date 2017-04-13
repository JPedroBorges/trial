$(function(){
	$.get('/counties', appendToList);
	function appendToList(counties){
		var list = ['<option value="vazio"></option>'];
		for(var i in counties){
			list.push($('<option>',{value: counties[i], text: counties[i]}));
		}
		$('.counties-sel').append(list);
		$('.infocenas').hide();
	}
	$(function() {
	    $('.counties-sel').change(function() {
	         $('.county-name').html($(this).val());
			 $.get('/weather/' + $(this).val() + '/daily', setTemperature);
	    }).change();
	});
	function setTemperature(temperature){
		$('.counties-sel').val() === 'vazio' ? $('.infocenas').hide() : $('.infocenas').show();
		$('.temperature').html(temperature + 'º');



	}
});
