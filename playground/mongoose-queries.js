const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
// var id = '5a66bd306c48ea28c8efa02611';
//
// if (!ObjectId.isValid(id)) {
//   console.log('ID not valid');
// }
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// })
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });
//
// Todo.findById(id)
//   .then((todo) => {
//     if (!todo) {
//       return console.log('Id not found');
//     }
//     console.log('Todo By Id', todo);
//   }).catch((e)=> console.log(e));

var id ='5a65954e5764bd36b050dcbb';
User.findById(id).then((user) => {
  if (!user) {
    return console.log('Unable to find user');
  }
  console.log(user);
}).catch(err => {
  console.log(err);
})
