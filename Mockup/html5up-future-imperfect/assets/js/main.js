/*
	Future Imperfect by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

    var $window = $(window),
        $body = $('body'),
        $menu = $('#menu'),
        $sidebar = $('#sidebar'),
        $main = $('#main'),
        $login = $('#login');

    // Breakpoints.
    breakpoints({
        xlarge: ['1281px', '1680px'],
        large: ['981px', '1280px'],
        medium: ['737px', '980px'],
        small: ['481px', '736px'],
        xsmall: [null, '480px']
    });

    // Play initial animations on page load.
    $window.on('load', function() {
        window.setTimeout(function() {
            $body.removeClass('is-preload');
        }, 100);
    });

    // Menu.
    $menu
        .appendTo($body)
        .panel({
            delay: 500,
            hideOnClick: true,
            hideOnSwipe: true,
            resetScroll: true,
            resetForms: true,
            side: 'right',
            target: $body,
            visibleClass: 'is-menu-visible'
        });


    $login
        .appendTo($body)
        .panel({
            delay: 500,
            hideOnClick: true,
            hideOnSwipe: true,
            resetScroll: true,
            resetForms: true,
            side: 'right',
            target: $body,
            visibleClass: 'is-login-visible'
        });

    // Toggle login panel when login button is clicked
    $('a[href="#login"]').click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        var $loginwidth = $login.width();

        $body.toggleClass('is-login-visible');

        if ($body.hasClass('is-login-visible')) {
            $login.animate({
                right: '0px'
            }, 1000);
        } else {
            $login.animate({
                right: -$loginwidth
            })
        }
    });

    // Hide login panel when clicking outside it
    $login.click(function(e) {
        if ($body.hasClass('is-login-visible') && !$(e.target).closest('#login').length) {
            $login.animate({
                right: '-25em'
            }, 2000);
            $body.removeClass('is-login-visible');
        }
    });

    $('#login .close').click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        $login.animate({
            right: '-25em'
        }, 2000);
        $body.removeClass('is-login-visible');
        $body.removeClass('is-menu-visible');
    });

    // Search (header).
    var $search = $('#search'),
        $search_input = $search.find('input');

    $body
        .on('click', '[href="#search"]', function(event) {

            event.preventDefault();

            // Not visible?
            if (!$search.hasClass('visible')) {

                // Reset form.
                $search[0].reset();

                // Show.
                $search.addClass('visible');

                // Focus input.
                $search_input.focus();

            }

        });

    $(document).ready(function() {
        $('#accordion .collapse').on('shown.bs.collapse', function() {
            $(this).parent().find('.btn-link').addClass('active');
        });

        $('#accordion .collapse').on('hidden.bs.collapse', function() {
            $(this).parent().find('.btn-link').removeClass('active');
        });
    });

    $search_input
        .on('keydown', function(event) {

            if (event.keyCode == 27)
                $search_input.blur();

        })
        .on('blur', function() {
            window.setTimeout(function() {
                $search.removeClass('visible');
            }, 100);
        });

    // Intro.
    var $intro = $('#intro');

    // Move to main on <=large, back to sidebar on >large.
    breakpoints.on('<=large', function() {
        $intro.prependTo($main);
    });

    breakpoints.on('>large', function() {
        $intro.prependTo($sidebar);
    });

})(jQuery);