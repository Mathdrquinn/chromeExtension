$(document).ready(function() {

  $.ajax({

    url: 'http://www.reddit.com/r/beerporn.json',
    method: 'GET',
    success:(function (data) {
      var beerpictures ='<ul>'
      for (var i = 1; i < 11; i++) {


        beerpictures += '<li><a href="' + data.data.children[i].data.url + '"><img src="' + data.data.children[i].data.thumbnail + '">' + '</li>';

        }

        beerpictures += '</ul>';

        $('.beerlist').html(beerpictures);

    }


  )



});

});
