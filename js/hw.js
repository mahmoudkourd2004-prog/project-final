
$(document).ready(function() {


// $(window).on('load' , function() {
//     $('.loader').fadeOut(2000)
// })

})


$(window).on('load' , function() {
    $('.loader').fadeOut(2000 , function() {
        $(this).parent().fadeOut(1000);
    });
})