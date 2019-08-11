$(document).ready(function() {
 console.log("enabled");
 $('#r_btn').click(function(){
 	$('.all-container__rule-container').fadeToggle(1000, "linear");
 });
 $('#rest_pasw_btn').click(function(e) {
 	e.preventDefault();
 	$('.container-inputs__disable-block').fadeToggle(1000, "linear");
 	$('#login_btn').toggle();
 });





});