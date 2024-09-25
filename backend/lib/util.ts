import mongoose from "mongoose";


declare global{
    var mongoDbConnnection: typeof mongoose | null;
}

global.mongoDbConnnection = null;
export async function connectToDatabase(){
    try{
        const connection = await mongoose.connect(process.env.MONGODB_CONNECTIONSTRING || "")
        console.log("Connected to database")
        return connection;
    }catch(error){
        console.log("Error connecting to database", error)
        return null;
        
    }
}

export async function ensureDatabaseConnection(){
if(global.mongoDbConnnection === null){
  global.mongoDbConnnection = await connectToDatabase();
}
}