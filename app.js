//Author: Kyle Quamme
//Created: 6/30/16
$(function(){
  var requestedMovie = '';

  $('.btnGif').on('click', function(){
    requestedTag = $('#searchBox').val().split(' ').join('+');
    getGIF(requestedTag);
  });
  $('.btnSticker').on('click', function(){
    requestedTag = $('#searchBox').val().split(' ').join('-');
    getStickers(requestedTag);
  });

  function getGIF(tag){
    $('main').empty();
    $.ajax('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=' + tag).success(function(giphy){
        $('main').append('<span class="result"><img src="' + giphy.data.image_url + '" />');
        $('main').append('<p><a href="' + giphy.data.image_url + '" target="_blank">' + giphy.data.image_url + '</a></p>');
      }
      )
      .fail(function(){
        $('main').append('<span><h2>Failed to load data from API</h2>');
      }
      );
    }
    function getStickers(tag){
      $('main').empty();
      $.ajax('http://api.giphy.com/v1/stickers/random?api_key=dc6zaTOxFJmzC&tag=' + tag).success(function(giphy){
        $('main').append('<span class="result"></span>');
        $('.result').append('<img src="' + giphy.data.image_url + '" />');
        $('.result').append('<p><a href="' + giphy.data.image_url + '" target="_blank">' + giphy.data.image_url + '</a></p>');
      }
      )
        .fail(function(){
          $('.result').append('<h2>Failed to load data from API</h2>');
        }
        );
      }
});
