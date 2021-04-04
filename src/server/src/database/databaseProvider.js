class DatabaseProvider {
  static client;

	static init() {
		if (client == null) {
			const MongoClient = require('mongodb').MongoClient;
			const uri = "mongodb+srv://valolineups:EastSideBestSide@cluster0.h53gx.mongodb.net/ValoLineups?retryWrites=true&w=majority";
			client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
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
        // Ensures that the client will close when you finish/error
        await client.close();
      }
    }
	}
}