$(document).ready(function () {

    // adds nav shadow    
    $(document).scroll(function() {
        const scrollTopVal = $(document.scrollingElement.scrollTop).toArray();
        
        if (scrollTopVal[0] >= 200) {
            $('#navbar').addClass('shadow-bg')
        } else {
            $('#navbar').removeClass('shadow-bg')    
        }
    })



    // fixes nav (closes it after clicking nav item on mobile devices)
    $(document).click(function (event) {
        const clickedItem = $(event.target);
        const opened = $('.navbar-collapse').hasClass("show");
        if (opened === true && !clickedItem.hasClass('navbar-toggler')) {
            $(".navbar-toggler").click();
        }
    });

    //slickJS
    $('.book-carousel').slick({
        mobileFirst: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
      });


});





//failed experiments:

//NUmber1:
    
    // $('.fa-bars').click(function() {
    //     if ($('#navbar-collapse').hasClass('show')) {
    //         if (!$('#navbar').hasClass('shadow-bg')) {
    //             $('#navbar').addClass('shadow-bg')
    //         }
    //     } else {
    //         $('#navbar').removeClass('shadow-bg')
    //     }


//Number2:

// $(document).scroll(function() {
//     const scrollTopVal = $(document.scrollingElement.scrollTop).toArray();

//     if (scrollTopVal[0] < 200) {
//         if (!$('#navbar').hasClass('shadow-bg')) {
//             if ($('#navbar-collapse').hasClass('show')) {
//                 $('.fa-bars').click(function() {
//                     $('#navbar').toggleClass('shadow-bg')
//                 })
//             } else {
//                 $('#navbar').removeClass('shadow-bg')
//             }
//         }
//     } else {
//         $('#navbar').addClass('shadow-bg')
//     }});
