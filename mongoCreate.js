// Loading the value of the MongoClient property of mongodb into the variable MongoClient:
const { MongoClient } = require('mongodb');
// database can be found at localhost and is listening on port 27017:
// url tells mongodb library where to contact mongo:
const url = 'mongodb://localhost:27017';

const createDocument = async (dbItem) => {
  try {
    const client = await MongoClient.connect(url);
    // const db = client.db('myFirstDatabase');
    // const myFirstCollection = db.collection('myFirstCollection');
    // const result = await myFirstCollection.insertOne(dbItem);
    // The 3 lines above do the same as these next 4:
    const result = await client
      .db('myFirstDatabase')
      .collection('myFirstCollection')
      .insertOne(dbItem); // dbItem passed in as an object (see function call at the bottom)
    client.close();
  } catch(err) {
    console.log('error', err);
  }
};

