import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

//const Db = process.env.ATLAS_URI;
//const connectionString = process.env.ATLAS_URI || "";

const variable = process.env.MONGO_CONN_STRING
console.log(variable);


const client = new MongoClient(variable);

let conn;
try {
  conn = await client.connect();
  console.log('mongoDB is CONNECTED!!! :)');
} catch(e) {
  console.error(e);
}

let db = conn.db("users");

export default db;