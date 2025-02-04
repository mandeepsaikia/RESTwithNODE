const app = require('express')
const router = app.Router()


const _feed = require('../controllers/feed')
const _data = require('../controllers/queries')
const _seqlData = require('../controllers/sequelize_queries')

router.get('/get', _feed.getController)
router.post('/create', _feed.postController)
router.get('/getquery',_data.getDataController)
router.get('/putquery', _data.postDataController)
router.get('/getidquery/:product_id', _data.getDataByIDController)

router.get('/getquerysequelize',_seqlData.getDataController_sequelize)
router.get('/putquerysequelize', _seqlData.postDataController_sequelize)
router.get('/getidquerysequelize/:id', _seqlData.getDataByIDController_sequelize)
router.get('/updatequerysequelize/:id', _seqlData.UpdateDataController_sequelize)

module.exports= router;