const { authPlugins } = require('mysql2');
const sequelize = require('../utils/database')
const Sequelize = require('sequelize');




exports.getDataController_sequelize = (req, res, next)=>{
 
   sequelize.m2.findAll().then(results=>{
    results.forEach(element => {
       const {dataValues} = element;
       console.log(dataValues);
    }); 

    res.redirect('/feed/get');
   }).catch(err=>{
    console.log(err);
   });
   
};

exports.postDataController_sequelize = (req, res, next) =>{
 
   const product_id = req.query.product_id;
   const product_name = req.query.product_name;
   sequelize.m2.create({product_id, product_name}).then(results=>{
     console.log('Created resource with sequelize successfully !');
     res.redirect('/feed/get');
   }).catch(err=>{
    console.log(err)
   });

}

exports.getDataByIDController_sequelize = (req, res, next)=>{
  const id = req.params.id;
  sequelize.m2.findByPk(id).then(results=>{
    /*
  results.forEach(element=>{
        const {dataValues} = element;
        console.log(dataValues);    
      });
     */ 
      console.log(results);
      res.redirect('/feed/get');
  }).catch(err=>{
    console.log(err);
  });


}


exports.UpdateDataController_sequelize = (req, res, next)=>{ // To be worked on
    const id = req.params.id;
    console.log('Reached correct endpoint...');
    sequelize.m2.findByPk(id).then(result=>{
        //result.product_name = 'changed_name';
        console.log(result);
        console.log('Resource updated successfully..');
        res.redirect('/feed/get')
    }).catch(err=>{
        console.log(err);
    })
   
};
