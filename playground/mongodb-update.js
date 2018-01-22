// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, database) => {
//   if (err) {
//     return console.log('Unabel to connect to MongoDB server.');
//   }
//   console.log('Connected to MongoDB server');
//
//   const TodoDB = database.db('TodoApp');
//   TodoDB.collection('Todos').findOneAndUpdate({
//     _id: new ObjectID('5a6570b71ebd7dadf1b7cffd')
//   }, {
//     $set: {
//       completed: true
//     }
//   }, {
//     returnOriginal: false
//   }).then((result) => {
//     console.log(result);
//   });
// });

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, database) => {

  if (err) {
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server');
  const TodoDB = database.db('TodoApp');
  TodoDB.collection('Users').findOneAndUpdate({name: 'Jen'}, {
    $set: {
      name: 'NJ'
    },
    $inc: {
      age: +1
    }
  },{ returnOriginal: false }).then((result) => {
    console.log(result);
  })

});
