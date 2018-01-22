// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, database) => {
  if (err) {
    return console.log('Unabel to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server');

  const TodoDB = database.db('TodoApp');

  //deleteMany
  // TodoDB.collection('Todos').deleteMany({text: 'eat lunch'}).then((result)=>{
  //     console.log(result);
  //   });
  // deleteOne
  // TodoDB.collection('Todos').deleteOne({text: 'eat lunch'}).then((result)=>{
  //     console.log(result);
  //   });
  //findOneAndDelete
  // TodoDB.collection('Todos').findOneAndDelete({text: 'eat lunch'}).then(result => {
  //   console.log(result);
  // });
  // database.close();

  // deleteMany
  TodoDB.collection('Users').deleteMany({name: 'NJ'}).then((result) => {
    console.log(result);
  });

  // findOneAndDelete
  TodoDB.collection('Users').findOneAndDelete({_id: new ObjectID('5a656c0e615540350467a27a')}).then((result)=> {
    console.log(result);
  });
});
