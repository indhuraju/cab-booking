'use strict';


var angular = require('angular');
require('angular-route');

var app = angular.module('movieApp', [ 'ngRoute' ]);

app.filter('unique', function() {

   return function(collection, keyname) {

      var output = [],
          keys = [];


      angular.forEach(collection, function(item) {

          var key = item[keyname];

          if(keys.indexOf(key) === -1) {

              keys.push(key);

              output.push(item);
          }
      });

      return output;
   };
});


require('./service');
require('./controller');

app.config(function($routeProvider) {

  $routeProvider.when('/home', {
    templateUrl: 'views/home.html',
    controller: 'HomeController',
  })
  .when('/booking', {
    templateUrl: 'views/booking.html',
    controller: 'BookCabController',
  })

  .when('/cancelbook',{
    templateUrl: 'view/cancellation.html',
    controller: 'CancelBookController',
  })
  .when('/admin', {
    templateUrl: 'views/admin.html',
    controller: 'CancellationController',
      })
  .when('/confirm', {
    templateUrl: 'views/confirm.html',
      controller: 'ConfirmationController',
  })
  .when('/login', {
      templateUrl: 'views/login.html',
      controller: 'LoginController',
      access: {restricted: false}
    })
 //  .when('/movie', {
 //   templateUrl: 'views/movie.html',
 //   controller: 'MovieController',
 // })

 .when('/review', {
  templateUrl: 'views/reviews.html',
  controller: 'ReviewController',
})

.when('/register', {
 templateUrl: 'views/register.html',
 controller: 'RegisterController',
 access: {restricted: false}
})

  .otherwise({
    redirectTo: '/home',
  });
});
