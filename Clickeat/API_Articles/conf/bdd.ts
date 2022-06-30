import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

/**
 * Connects the API to the database for a given database name.
 * 
 * @param db - The name of the database.
 */
export function bddConnect(db: string) {
    let urlMongo = "mongodb://localhost:27017/" + db;

    try {
        const db = mongoose.connect(urlMongo);
        console.log("Connection successful")
        return db
    } catch(error){
        console.log(error);
    }
}
