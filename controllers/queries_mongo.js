
const _mongoConn = require('../utils/mongoDB')

class Product{
    constructor(product_id, product_name){
     this.product_id = product_id;
     this.product_name = product_name;
    }
    save(){
       const db = _mongoConn.m2;
       const obj_conn = db()
       obj_conn.collection('movies').insertOne(this).then((results)=>{
         console.log(results);
      }).catch(err=>{
         console.log(err);
      });
       
    }
 }

 exports.postDataMongo_sequelize =(req, res, next)=>{
   
    console.log('Mongo Endpoint..')
    const product = new Product(1000, 'MongoProd1');
    product.save();
    console.log('Collection creation successful..');
    res.redirect('/feed/get')
    
 }