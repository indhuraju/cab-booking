var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));


var mongoose = require('mongoose');

var carSchema = mongoose.Schema({
  // cityID: String,
  CarName: String,
  CarType: String,
  CarNumber: String
 });
var Car = mongoose.model('Car',carSchema, 'Cartable');


router.get('/c', function (req, res) {
    console.log("REACHED GET FUNCTION ON SERVER");
    Car.find({}, function (err, docs) {
         res.json(docs);

    });
});

router.get('/c/:id', function (req, res) {
    console.log("REACHED GET ID FUNCTION ON SERVER");
     Car.find({_id: req.params.id}, function (err, docs) {
         res.json(docs);

    });
});

router.post('/c', function(req, res){
  console.log(req.body);
  // var id = req.body.cityID;
  var name = req.body.CarName;
  var type = req.body.CarType;
  var num = req.body.CarNumber;
var car1 = new Car({
    // cityID:id,
    CarName:name,
    CarType:type,
    CarNumber:num
});

  car1.save(function(err, docs){
    if ( err ) throw err;
    console.log("city Saved Successfully");
    res.json(docs);
  });

  })

router.delete('/c/:id', function(req, res){
   console.log("REACHED Delete FUNCTION ON SERVER");
      Car.remove({_id:req.params.id}, function(err, docs){
        res.json(docs);
    });
})

router.put('/c/:id', function(req, res){
    console.log("REACHED PUT");
    console.log(req.body);
  Car.findOneAndUpdate({_id:req.params.id}, req.body, function (err, data) {
      res.json(data);
    });
})

router.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = router;
