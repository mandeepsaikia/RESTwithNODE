const pool = require('../utils/database')
/*
exports.getDataController = (req, res, next)=>{
    console.log('Hitting generic controller..');
    const d1 = req.query.d1;
    const d2 = req.query.d2;
    console.log('Dummpy params d1:' + d1  + " and d2:" + d2 );
    pool.m1.execute('select * from products').then((results)=>{
    console.log(results)
    res.redirect('/feed/get')
   }).catch((err)=>{
    console.log(err)
   })
};
*/
exports.getDataController = async (req, res, next)=>{
    console.log('Hitting generic controller..with async code');
    const d1 = req.query.d1;
    const d2 = req.query.d2;
    console.log('Dummpy params d1:' + d1  + " and d2:" + d2 );
    const results = await pool.m1.execute('select * from products');
    console.log(results);
    res.redirect('/feed/get');
    /*
    .then((results)=>{
    console.log(results)
    res.redirect('/feed/get')
   }).catch((err)=>{
    console.log(err)
   })
   */
};


exports.postDataController = (req, res, next)=>{
   console.log('Hitting put controller..');
   const product_id = req.query.product_id;
   const product_name = req.query.product_name;
   console.log('Logging query params : ' + product_id + " and " + product_name);
   pool.m1.execute('insert into products (product_id, product_name) values (?,?)',[product_id,product_name]).then(()=>{
    res.status(201).json({message : 'Resource created successfully !'});
    //res.redirect('/feed/get');
   }).catch((err)=>{
    console.log(err);
   });
};

exports.getDataByIDController = (req, res, next)=>{
    console.log('Hitting param controller..');
    const product_id = req.params.product_id;
    console.log('Logging param : '+ product_id);
    pool.m1.execute('select * from products where product_id = ?', [product_id]).then(results=>{
        console.log(results)
        res.redirect('/feed/get');
    }).catch(err=>{
        console.log(err);
    })
};