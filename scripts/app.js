// sample image URL: http://image.tmdb.org/t/p/w500/hmOzkHlkGvi8x24fYpFSnXvjklv.jpg

//w500 is width

(function(){
  var app = angular.module('movie',[]);
  app.apiKey = api.key;
  app.url = 'https://api.themoviedb.org/3/';
  app.movieSearch = 'search/person?query=';

  
  app.controller('MovieController', function($http){
    var movie = this;

  this.buttonPress = function(val){
    console.log(app.url + app.movieSearch + val + app.apiKey);
    $http.get(app.url + app.movieSearch + val + app.apiKey).
      success(function(data) {
        app.result = data;
        console.log(app.result);
      }).
      error(function(e) {
        console.log(e.message);
      });
  };


  });


})();