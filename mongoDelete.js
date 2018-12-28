// Loading the value of the MongoClient & ObjectId properties of mongodb
// into the variables MongoClient & ObjectId:
const { MongoClient, ObjectId } = require('mongodb');
// database can be found at localhost and is listening on port 27017:
const url = 'mongodb://localhost:27017/example';

const deleteDocById = async (dbItemId) => {
  try {
    const client = await MongoClient.connect(url);
    const db = client.db('myFirstDatabase');
    const myFirstCollection = db.collection('myFirstCollection');
    // deleteDocById() is passed an Id as a string.
    // { _id: ObjectId(dbItemId) } converts the 'dbItemId' into a query that can be passed to deleteOne
    await myFirstCollection.deleteOne({ _id: ObjectId(dbItemId) });
    client.close();
  } catch(err) {
    console.log('error', err)
  }
};

deleteDocById("5c23891dad814149c634736e");
