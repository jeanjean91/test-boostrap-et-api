var heure = document.getElementById('temps');
var tempsReel = setInterval(horloge, 1000);
var stop = document.getElementById('stop');

function horloge() {
    var d = new Date()
    heure.innerHTML = d.toLocaleTimeString();
}

/*function arret() {
 
stop.addEventListener('click', arret);
   clearInterval(tempsReel);
}*/


/*$(document).ready(function() {
    

    function carousel() {

        $('.single-item').slick();

        $('.filtering').slick({
            slidesToShow: 4,
            slidesToScroll: 4
        });

        var filtered = false;

        $('.js-filter').on('click', function() {
            if (filtered === false) {
                $('.filtering').slick('slickFilter', ':even');
                $(this).text('Unfilter Slides');
                filtered = true;
            } else {
                $('.filtering').slick('slickUnfilter');
                $(this).text('Filter Slides');
                filtered = false;
            }
        });

    }
    carousel();


});*/