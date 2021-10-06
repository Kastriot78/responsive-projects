// $(document).ready(function() {
//     const videoSrc = $('#player-1').attr("src");
//     $('.video-play-btn').on('click', function() {
//         if($('.video-popup').hasClass('open')) {
//             $('.video-popup').removeClass('open');
//             $('#player-1').attr("src",'');
//         } else {
//             $('.video-poup').addClass('open');
//             if($('#player-1').attr("src")=='') {
//                 $('#player-1').attr("src",videoSrc);
//             }
//         }
//     });
// });

$(document).ready(function() {
    $(window).on('scroll', function() {
        if($(this).scrollTop() > 90) {
            $('.navbar').addClass('navbar-shrink');
        } else {
            $('.navbar').removeClass('navbar-shrink');
        }
    });

    // features carousel
    $('.features-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay: true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:3,
            },
            1000:{
                items:3,
            }
        }
    });

    $.scrollIt({
        topOffset: -50
    });

    // -------- navbar collapse (kur klikojm n linqe me u mbyll menuja)
    $(".nav-link").on('click', function() {
        $('.navbar-collapse').collapse("hide");
    });
    
    // ----- Toggle theme - light dark mode
    function toggleTheme() {
        if(localStorage.getItem('dark-mode') !== null) {
            if(localStorage.getItem('dark-mode') === 'dark') {
                $('body').addClass('dark');
            } else {
                $('body').removeClass('dark');
            }
        }
        updateIcon();
    }
    toggleTheme();

    $(".toggle-theme").on("click", function() {
        $("body").toggleClass('dark');
        if($("body").hasClass("dark")) {
            localStorage.setItem('dark-mode', "dark");
        } else {
            localStorage.setItem('dark-mode', "light");
        }
        updateIcon();
    })

    function updateIcon() {
        if($("body").hasClass('dark')) {
            $(".toggle-theme i").removeClass("fa-moon");
            $(".toggle-theme i").addClass("fa-sun");
        } else {
            $(".toggle-theme i").removeClass("fa-sun");
            $(".toggle-theme i").addClass("fa-moon");
        }
    }
});

let videoPopup = document.querySelector('.video-popup');
let videoPlayBtn = document.querySelector('.video-play-btn');
let closePlayBtn = document.querySelector('.video-popup-close');

videoPlayBtn.addEventListener('click', () => {
    videoPopup.classList.toggle('open');
});

closePlayBtn.addEventListener('click', () => {
    videoPopup.classList.toggle('open');
});
