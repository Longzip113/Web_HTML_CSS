$(document).ready(
    function() {
        //Sticky nav
        $('.about-section').waypoint(
            function(direction) {
                if (direction == "down") {
                    $('nav').addClass('sticky');
                } else {
                    $('nav').removeClass('sticky');
                }
            }, {
                offset: '750px'
            }

        )

        //scroll
        $('a').click(function(event) {
            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 500);
            event.preventDefault();
        });
    }
)