var express =require('express');
var mongoose = require('mongoose');
var router = express.Router();
var bodyParser=require('body-parser');
router.use(bodyParser.urlencoded({extended:true}));
var mongoose = require('mongoose');

var BookCabSchema = mongoose.Schema({
  id:String,
    Source:String,
   Desination:String,
   Type:String,
   Pickdate:String,
   PickTime:String

   });

var BookCab = mongoose.model('BookCab', BookCabSchema, 'BookingTable');




router.get('/bkcb', function (req, res,next) {
   console.log("REACHED GET FUNCTION ON SERVER");

   BookCab.find({}, function (err, docs) {
        res.json(docs);
        console.log(docs);

   });
});

router.get('/bkcb/:id', function (req, res) {
   console.log("REACHED GET ID FUNCTION ON SERVER");
    BookCab.find({_id: req.params.id}, function (err, docs) {
        res.json(docs);

   });
});

router.post('/bkcb', function(req, res){
 console.log(req.body);
var idno = req.body.id;
   var src = req.body.Source;
   var des = req.body.Desination;
   var typ = req.body.Type;
   var dat = req.body.Pickdate;
   var tim = req.body.PickTime;


  var bcab1 = new BookCab({
   id:idno,
   Source:src,
   Desination:des,
   Type:typ, 
  Pickdate:dat,
  PickTime:tim

 });


 bcab1.save(function(err, docs){
   if ( err ) throw err;
   console.log("Book Saved Successfully");
   res.json(docs);
 });

 })



router.delete('/bkcb/:id', function(req, res){
  console.log("REACHED Delete FUNCTION ON SERVER");
     BookCab.remove({_id:req.params.id}, function(err, docs){
       res.json(docs);
   });
})

router.put('/bkcb/:id', function(req, res){
   console.log("REACHED updation ");
   console.log(req.body);
   BookCab.findOneAndUpdate({_id:req.params.id}, req.body, function (err, data) {
     res.json(data);
   });
})

router.use(function(req, res, next) {
 var err = new Error('Not Found');
 err.status = 404;
 next(err);
});


module.exports = router;
