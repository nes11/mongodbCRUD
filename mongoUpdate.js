// Loading the value of the MongoClient & ObjectId properties of mongodb
// into the variables MongoClient & ObjectId:
const { MongoClient, ObjectId } = require('mongodb');
// database can be found at localhost and is listening on port 27017:
const url = 'mongodb://localhost:27017';

const updateDocById = async (dbItemId) => {
  try {
    const client = await MongoClient.connect(url);
    const db = client.db('myFirstDatabase');
    const myFirstCollection = db.collection('myFirstCollection');
    // can alternatively use updateMany()
    // 1st arg. identifies the document(s), 2nd one updates it(them) using an operator $
    await myFirstCollection.updateOne({ _id: ObjectId(dbItemId) }, { $rename: { status : 'job' } });
    client.close();
  } catch(err) {
    console.log('error', err);
  }
};
