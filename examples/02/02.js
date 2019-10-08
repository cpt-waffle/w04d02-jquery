let i = 0;


$( document ).ready(function() {
    console.log( "ready!" );

    $('#red-btn').on('click', () => {
    	console.log('clicked');
    	i++;
    	$('.clicks').append(`<li> clicked ${i}</li>`);
    })
});