(function($) {
    "use strict";

    // Initialize Animations to match the "Data Load" feel
    var animateInit = function() {
        AOS.init({
            duration: 800,
            easing: 'ease-out-back',
            once: true,
            delay: 100
        });
    };
    animateInit();

    // The BI Counter Animation
    var counter = function() {
        $('.number').waypoint(function(direction) {
            if(direction === 'down' && !$(this.element).hasClass('ftco-animated')) {
                $(this.element).animateNumber({
                    number: $(this.element).data('number'),
                    numberStep: $.animateNumber.numberStepFactories.separator(',')
                }, 3000);
            }
        }, { offset: '95%' });
    };
    counter();

    // Smooth scroll for that "Single Page App" feel
    $('.nav-link').on('click', function(e) {
        if (this.hash !== "") {
            e.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 70
            }, 800);
        }
    });

})(jQuery);