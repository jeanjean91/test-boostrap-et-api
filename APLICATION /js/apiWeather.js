$(function() {
    var valeur;
    var apiKey = '834bac2328929994446e4693011a406e';
    var baseUrl = 'http://api.openweathermap.org/data/2.5/weather?appid=' + apiKey;
   
    $('#chek ').on('click', function(e) {
        e.preventDefault();
        $('.card').removeClass('.d-none');

        var cityValue = $('#city').val();
        valeur = $('input').val();
        var params = {
            url: baseUrl + '&q=' + cityValue + '&units=metric&lang=fr',
            method: 'GET'

        };

        $.ajax(params).done(function(response) {
                console.log(response);

                //show card

                $('.card').removeClass('d-none');
                $('.message').html('');


                var temp = Math.round(response.main.temp) + '˚';
                var tempMax = Math.round(response.main.temp_max) + '˚';
                var tempMin = Math.round(response.main.temp_min) + '˚';

                //description
                $('.description-weather').text(response.weather[0].description);

                //titre
                $('.card-title').text(response.name);

                //temperature
                $('.temp-weather').text(temp);
                //temp-max
                $('.temp-max-weather').text(tempMax);
                //temp-min
                $('.temp-min-weather').text(tempMin);
                //icon


                var image = response.weather[0].icon;
                $('.image-weather').attr('src', 'http://openweathermap.org/img/w/' + image +
                    '.png');
                $('.image-weather').attr('alt', response.name);

            })
            .fail(function() {
                $('.invalid-feedback').slideDown();
                console.error('erreur');
            });
    });
});