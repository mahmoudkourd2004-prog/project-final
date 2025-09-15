
$(document).ready(function () {



    // $("#click").click(function () {

    //     $('.name').animate({
    //         width: "500px",
    //         height: "450px",
    //         background: "red",
    //         top: "120px",
    //         right: "0px",
    //     }, 2500, function () {
    //         $('.name').animate({
    //             width: "400px",
    //             height: "400px",
    //             background: "red",
    //             top: "40px",
    //             left: "0px",
    //         }, 2500 , function () {
    //             $('.name').animate({
    //                 width: "400px",
    //                 height: "400px",
    //                 background: "orange",
    //                 top: "140px",
    //                 left: "auto",
    //                 borderRadius: "50%"
    //             } , 2500)
    //         })
    //     });

    //     $('.stop').click(function () {
    //         $('.name').stop(false, true);
    //     })
    // });



    // السلسلة
    // $('#click').click(function() {
    //     $('.name').hide(2000);
    //     $('.name').show(2000);
    //     $('.name').fadeOut(2000);
    //     $('.name').fadeIn(2000);
    // })


    // multiptle event with bind or on
    // $('#on').bind('mouseenter' , function() {
    //     $('div').css('background' , 'blue')
    // })


    // $('#on').bind('click' , 'dblclick' , function() {
    //     $('.mm').toggle(1500);
    // });



    // Event map with Bind
    // $('#on').bind({
    //     click: function() {
    //         console.log($('.mm h5').text());
    //     } ,

    //     dblclick: function() {
    //         console.log($('.mm h5').text('this is new text html'));
    //     } ,

    //     click: function() {
    //         $('.mm').toggle(1000);
    //     }

    // });


    // $('a').on('click' , function(e) {
    //     e.preventDefault();
    //     $('img').hide(1000);
    // });


    $('input').bind('keydown', function () {
        $('h5').text('new text is keydown');
    });

    $('input').bind('keypress', function () {
        $('h5').text('new text is keypress');
    });

    $('input').bind('keyup', function () {
        $('h5').text('new text is keyup');
    });



    // $('select').on('change', function () {
    //     $('div').text($(this).val());
    // })


    // $(window).on('resize', function () {
    //     console.log($(window).width() , $(window).height());
    // })





});













