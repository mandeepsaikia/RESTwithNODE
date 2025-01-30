const { timeLog } = require("console");

exports.getController = (req, res, next)=>{
    res.status(200).json({'key1':'val1', 'key2':'val2', post:['k1','k2','k3']})
}

exports.postController = (req, res, next)=>{
    const title = req.body.title;
    const content = req.body.content; //title, content are two attributes sent to post method
    // We will create resource in database
    const _title = toString(title)
    const _content = toString(content)
    res.status(201).json({message : 'Resource created successfully !', post :[title, content]})
}