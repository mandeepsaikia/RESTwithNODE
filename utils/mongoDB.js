const mongodb = require('mongodb');
const _MongoClient = mongodb.MongoClient;

let _db; //store db connection object
const mongo_connection = (callback) =>{
   _MongoClient.connect('mongodb+srv://test2:Ankita0802@cluster0.qj6d3.mongodb.net/').then((result)=>{ //'result' here is the mongo 'client' object
   //callback(result);
   _db = result.db('sample_mflix'); //Extract connection pool from mongo client
   console.log('MongoDB connect successful...');
   }).catch((err)=>{
   console.log(err);
   });
}

const getdb = ()=>{
    if(_db){
        return _db;
    }
    throw 'No valid connection !';   
}


module.exports = {m1: mongo_connection, m2: getdb} ;