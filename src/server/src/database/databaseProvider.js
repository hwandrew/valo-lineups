class DatabaseProvider {
  static client;

  static init() {
    if (client == null) {
      const MongoClient = require('mongodb').MongoClient;
      const { mongoUri } = require('../config');
      client = new MongoClient(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });
    }
  }

  static async getAllMaps() {
    if (client != null) {
      try {
        // Connect the client to the server
        await client.connect(err => {
          if (err) {
            console.log(err);
          }
        });

        // Establish and verify connection
        await client.db("ValoLineups").command({ ping: 1 });
        console.log("Connected successfully to server");

        var collection = this.client.db("ValoLineups").collection("maps");
        return collection.find({}).toArray();
      } 
      finally {
        // Ensures that the client will close when we finish/error
        await client.close();
      }
    }
  }
}