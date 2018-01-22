// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, database) => {
  if (err) {
    return console.log('Unabel to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server');

  // const TodoDB = database.db('TodoApp');
  // TodoDB.collection('Todos').find({
  //   _id: new ObjectID('5a6568562ade7b25dc6049bb')})
  //   .toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch dotos', err);
  // });
  // database.close();

  // const TodoDB = database.db('TodoApp');
  // TodoDB.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch dotos', err);
  // });
  // database.close();

  const TodoDB = database.db('TodoApp');
  TodoDB.collection('Users').find({name: 'NJ'}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  })

});
