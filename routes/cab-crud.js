var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));


var mongoose = require('mongoose');

var cabSchema = mongoose.Schema({
 CabName:String,
 CabAmount:String,
 CabKM:String,
 CabAKM:String,
 CabWC:String

 });
var Cab = mongoose.model('Cab', cabSchema, 'Cabtable');


router.get('/cb', function (req, res) {
    console.log("REACHED GET FUNCTION ON SERVER");
    Cab.find({}, function (err, docs) {
         res.json(docs);

    });
});

router.get('/cb/:id', function (req, res) {
    console.log("REACHED GET ID FUNCTION ON SERVER");
     Cab.find({_id: req.params.id}, function (err, docs) {
         res.json(docs);

    });
});

router.post('/cb', function(req, res){
  console.log(req.body);
  var cn = req.body.CabName;
  var at = req.body.CabAmount;
  var kms = req.body.CabKM;
  var km = req.body.CabAKM;
  var wt = req.body.CabWC;
  
var cab1 = new Cab({
    CabName:cn,
    CabAmount:at,
    CabKM:kms,
    CabAKM:km,
    CabWC:wt
});

  cab1.save(function(err, docs){
    if ( err ) throw err;
    console.log("cab Saved Successfully");
    res.json(docs);
  });

  })

router.delete('/cb/:id', function(req, res){
   console.log("REACHED Delete FUNCTION ON SERVER");
      Cab.remove({_id:req.params.id}, function(err, docs){
        res.json(docs);
    });
})

router.put('/cb/:id', function(req, res){
    console.log("REACHED PUT");
    console.log(req.body);
  Cab.findOneAndUpdate({_id:req.params.id}, req.body, function (err, data) {
      res.json(data);
    });
})

router.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = router;
