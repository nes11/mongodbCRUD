// Loading the value of the MongoClient & ObjectId properties of mongodb
// into the variables MongoClient & ObjectId:
const { MongoClient, ObjectId } = require('mongodb');
// database can be found at localhost and is listening on port 27017:
const url = 'mongodb://localhost:27017';

const getDocuments = async (query) => {
  try {
    const client = await MongoClient.connect(url);
    const db = client.db('myFirstDatabase');
    const myFirstCollection = db.collection('myFirstCollection');
    //find() returns an array whereas findOne() returns a single document-object
    // therefore no need for .toArray if using findOne()
    const result = await myFirstCollection.find(query).toArray();
    client.close();
    return result;
  } catch(err) {
    console.log('error', err)
  }
};

// this uses the previous function,
// allowing getDocumentById() to be passed an Id as a string instead of a query object
const getDocumentById = async (id) => {
  const res = await getDocuments({ _id: ObjectId(id) });
  return res[0];
};

getDocumentById("5c238900a16fc949c1479830").then(res => console.log(res));
