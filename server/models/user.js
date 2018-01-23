var mongoose = require('mongoose');

var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  }
});

module.exports = {User};
// var someUser = new User({
//   email: 'nj@gmail.com'
// });
//
// someUser.save().then((doc)=>{
//   console.log(JSON.stringify(doc,undefined,2));
// }, (err)=> {
//   console.log(err);
// });
