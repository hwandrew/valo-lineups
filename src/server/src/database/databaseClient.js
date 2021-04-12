export class DatabaseClient {
  #client;
  
  /**
   * A function to instantiate the MongoClient object and populate connection fields
   */
  #init() {
    if (this.#client == null) {
      const MongoClient = require('mongodb').MongoClient;
      const { mongoUri } = require('../config');
      this.#client = new MongoClient(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });
    }
  }

  /**
   * A function to connect to the remote MongoDB server
   * @returns a promise for an array of the objects in the `maps` collection 
   */
  async #connect() {
    // Connect the client to the server
    await this.#client.connect();

    // Establish and verify connection
    await this.#client.db("ValoLineups").command({ ping: 1 });
    console.log("Connected successfully to server");
  }

  /**
   * A function to get all objects stores in `maps` collection
   * @returns a promise for an array of the objects in the `maps` collection 
   */
  async getAllMaps() {
    if (this.#client == null) {
      this.#init();
    }
    
    try {
      // Connect to MongoDB
      await this.#connect();

      // Query for collection
      const collection = this.#client.db("ValoLineups").collection("maps").find({});
      return await collection.toArray();
    }
    catch (e) {
      console.error(e);
    }
    finally {
      // Ensures that the client will close when we finish/error
      await this.#client.close();
    }
  }
}