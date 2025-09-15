
$(document).ready(function () {
    // $("#click").click(function() {
    //     $(".div").toggle(2000)
    // });

    //     $('.div').mouseenter(function() {
    //         $('.div').css('background' , 'red');
    //     });

    //     $('.div').mouseleave(function() {
    //         $('.div').css('background' , 'white');
    //     });
    // $('.div').hover(function () {
    //     $('.div').css('background', 'red'); // mouseenter
    // },
    //     function () {
    //         $(this).css('background', 'blue'); // mouseleave
    //     })

    //   $('#click').click(function() {
    //     $('.div').fadeOut(2000)
    //   })

    //   $('#click').click(function() {
    //     $('.div').fadeIn(2000)
    //   })

    // $('#click').click(function () {
    //     $('.div').fadeToggle(2000);

    // })

    // $('#click').click(function () {
    //     $('.div').slideUp(2000);

    // })

    // $('#click').click(function () {
    //     $('.div').slideDown(2000);

    // })


    // $('.more').click(function () {
    //     $('.div1').hide(2000);

    // })

    // $('.more').click(function () {
    //     $('.div1').show(2000);

    // })


    // $('.div2').mouseenter(function () {
    //     $('.div2').css('background', 'red');
    // });

    // $('.div2').mouseleave(function () {
    //     $('.div2').css('background', 'yellow');
    // });

    // $('#click').click(function () {
    //     $('.div').slideToggle(2000);

    // })

    $('.box').click(function () {
        $('.menu').animate({ 
            left: "0",
        } , 1500);

    });


    $('.fa-close').click(function() {
        $('.menu').animate( {
            left: "-100%",
        } , 1500);
    });



});

// hide + show = toggle
// mouseenter + mouseleave = hover
// fadeOut + fadeIn = fadeToggle
// slideUp + slideDown = slideToggle