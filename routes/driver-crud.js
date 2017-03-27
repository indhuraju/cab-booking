var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));


var mongoose = require('mongoose');

var driverSchema = mongoose.Schema({
  DriverID: String,
  DriverName: String,
  DriverAddress: String,
  Email: String,
  PhoneNumber: String,
  LicenseNumber:String,
  Password:String,
  CarName: String,
  CarType: String,
  CarNumber: String

 });
var Driver = mongoose.model('Driver', driverSchema, 'Drivertable');


router.get('/d', function (req, res) {
    console.log("REACHED GET FUNCTION ON SERVER");
    Driver.find({}, function (err, docs) {
         res.json(docs);

    });
});

router.get('/d/:id', function (req, res) {
    console.log("REACHED GET ID FUNCTION ON SERVER");
     Driver.find({_id: req.params.id}, function (err, docs) {
         res.json(docs);

    });
});

router.post('/d', function(req, res){
  console.log(req.body);
  var id = req.body.DriverID;
  var na = req.body.DriverName;
  var addr = req.body.DriverAddress;
  var mail = req.body.Email;
  var numb = req.body.PhoneNumber;
  var nu =req.body.LicenseNumber;
  var pass = req.body.Password;
  var name = req.body.CarName;
  var type = req.body.CarType;
  var num = req.body.CarNumber;
var driver1 = new Driver({
    DriverID:id,
    DriverName:na,
    DriverAddress:addr,
    Email:mail,
    PhoneNumber:numb,
    LicenseNumber:nu,
    Password:pass,
    CarName:name,
    CarType:type,
    CarNumber:num
});

  driver1.save(function(err, docs){
    if ( err ) throw err;
    console.log("Driver Saved Successfully");
    res.json(docs);
  });

  })

router.delete('/d/:id', function(req, res){
   console.log("REACHED Delete FUNCTION ON SERVER");
      Driver.remove({_id:req.params.id}, function(err, docs){
        res.json(docs);
    });
})

router.put('/d/:id', function(req, res){
    console.log("REACHED PUT");
    console.log(req.body);
  Driver.findOneAndUpdate({_id:req.params.id}, req.body, function (err, data) {
      res.json(data);
    });
})

router.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = router;
