'use strict';

var app = require('angular').module('movieApp');

app.controller('CancellationController', require('./cancellationController'));
app.controller('CancelBookController', require('./cancelbookController'));
app.controller('HomeController', require('./homeController'));
app.controller('RegisterController', require('./registerController'));
app.controller('ReviewController', require('./reviewController'));
app.controller('BookCabController', require('./bookcabController'));
app.controller('ConfirmationController', require('./confirmationController'));

