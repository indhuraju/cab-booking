var express =require('express');
var mongoose = require('mongoose');
var router = express.Router();
var bodyParser=require('body-parser');
router.use(bodyParser.urlencoded({extended:true}));
var mongoose = require('mongoose');

var ConfirmationCabSchema = mongoose.Schema({
  Cid:String,
    Csource:String,
   CDesination:String,
   CType:String,
   CPickdate:String,
   CPickTime:String,
   Cname:String,
   Mail:String,
   Mobile:String

   });

var ConfirmCab = mongoose.model('ConfirmCab', ConfirmationCabSchema, 'ConfirmationTable');




router.get('/cnfm', function (req, res,next) {
   console.log("REACHED GET FUNCTION ON SERVER");

   ConfirmCab.find({}, function (err, docs) {
        res.json(docs);
        console.log(docs);

   });
});

router.get('/cnfm/:id', function (req, res) {
   console.log("REACHED GET ID FUNCTION ON SERVER");
    ConfirmCab.find({_id: req.params.id}, function (err, docs) {
        res.json(docs);

   });
});

router.post('/cnfm', function(req, res){
 console.log(req.body);
var idno = req.body.Cid;
   var srce = req.body.Csource;
   var dest = req.body.CDesination;
   var typ = req.body.CType;
   var time = req.body.CPickTime;
   var date = req.body.CPickdate;
   var nme = req.body.Cname;
   var eml = req.body.Mail;
   var mbl = req.body.Mobile;

  var cnfrm1 = new ConfirmCab({
   Cid:idno,
   Csource:srce,
   CDesination:dest,
   CType:typ,
CPickdate:date,
  CPickTime:time,
  Cname:nme,
  Mail:eml,
  Mobile:mbl

 });


 cnfrm1.save(function(err, docs){
   if ( err ) throw err;
   console.log("cONFIRMATION Saved Successfully");
   res.json(docs);
 });

 })



router.delete('/cnfm/:id', function(req, res){
  console.log("REACHED Delete FUNCTION ON SERVER");
     ConfirmCab.remove({_id:req.params.id}, function(err, docs){
       res.json(docs);
   });
})

router.put('/cnfm/:id', function(req, res){
   console.log("REACHED updation ");
   console.log(req.body);
   ConfirmCab.findOneAndUpdate({_id:req.params.id}, req.body, function (err, data) {
     res.json(data);
   });
})

router.use(function(req, res, next) {
 var err = new Error('Not Found');
 err.status = 404;
 next(err);
});


module.exports = router;
