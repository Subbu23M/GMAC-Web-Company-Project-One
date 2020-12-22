// jQuery

// Select the element and add the class

$(document).ready(function(){
    $('.linkb').addClass('color');

    $('.linkc').addClass('linkcolor');
});

// Disable anchor tags which doesn't have content.
$('a[href="#"]').on('click',function(event){
    event.preventDefault();
    event.stepPropagation();
});

