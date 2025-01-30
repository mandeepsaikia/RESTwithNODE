const app = require('express')
const router = app.Router()


const _feed = require('../controllers/feed')
router.get('/get', _feed.getController)
router.post('/create', _feed.postController)

module.exports= router;