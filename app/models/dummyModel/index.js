var mongoose = require('mongoose');
//var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

var dummySchema = new mongoose.Schema ({
   dummyValue:{
       type:String,Required:false
   }
});

module.exports = mongoose.model('DummyModel',dummySchema);