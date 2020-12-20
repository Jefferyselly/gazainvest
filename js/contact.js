$(document).ready(function(){
	$('#chatWithus').click(() => {
		//show the conversation container
		$('#conversation').removeAttr('class');

		//remove the chatWithUs button 
		$('#chatWithus').attr('class','d-none')

		//CHANGE THE WHATSAPP ICON TO THE X-ICON
		$('#wa-icon').removeAttr('class')
		$('#x-icon').attr('class','fa fa-times fa-3x circle-icon2 animate__animated animate__fadeInLeft')




	})
	//************ Close the Whatsapp contact button ********************//
	$('#x-icon').click(() => {
		//show the conversation container
		$('#conversation').attr('class','d-none');

		//remove the chatWithUs button 
		$('#x-icon').attr('class','d-none')

		//CHANGE THE X-ICON WO WHATSAPP ICON
		$('#chatWithus').attr('class','d-inline')
		$('#wa-icon').attr('class','fa fa-whatsapp fa-3x circle-icon2 animate__animated animate__fadeInRight')




	})
})