import { MongoClient, Db, ServerApiVersion } from "mongodb";

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

export async function connectToDatabase() {
  if (cachedDb) {
    console.log("Using cached database instance");
    return cachedDb;
  }

  const uri = process.env.MONGODB_URI;
  const dbName = process.env.DATABASE;

  if (!uri) {
    throw new Error(
      "Please define the MONGODB_URI environment variable in .env.local"
    );
  }

  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  await client.connect();
  console.log("Connected to MongoDB!");
  const db = client.db(dbName);

  cachedClient = client;
  cachedDb = db;

  return db;
}
