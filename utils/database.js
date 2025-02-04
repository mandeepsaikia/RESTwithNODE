const mysql = require('mysql2')


const pool = mysql.createPool({

    host: 'localhost',
    database: 'sys',
    user: 'root',
    password: 'Ankita0802'
});

const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('sys', 'root', 'Ankita0802', {
    dialect: 'mysql',
    host: 'localhost'
});


const Product = sequelize.define('products_sequelize', { //Setting the sequelize model, which corresponds to the database table.
    product_id : {
       type : Sequelize.INTEGER,
       allowNull: false
       //autoIncrement: true
    },
    product_name : {    
       type: Sequelize.STRING,
    }
   
   })
   
   
module.exports = { m1: pool.promise(), m2: Product};