const { timeLog } = require("console");

/*

Some notes on CORS error (Cross Origin Resource sharing)
1.) Say frontend and backend run on same domain (say client = localhost:3000 and server = localhost:3000), both run in same 'domain..then no issues in communication.
2.) If both in diff domains, then CORS issue.
3.) This is a default defense mechanism in browsers to not accept responses from diff domains


*/
exports.getController = (req, res, next)=>{
   // const cookies = req.get('Cookie');
   // console.log('Cookies sent :' + cookies);
    const session_cookie = req.session.key1;
    console.log('Session cookies : '+ session_cookie);
    res.status(200).json({posts:[{
        _id:'1',
        title: 'First Post',
        content: 'This is my first content',
        creator:{
            name: 'Mandeep'
        },
        createdAt: new Date()
      }]})
}

exports.postController = (req, res, next)=>{ 
    const title = req.body.title;
    const content = req.body.content; //title, content are two attributes sent to post method
    // We will create resource in database
    const _title = toString(title)
    const _content = toString(content)
    console.log('Parsed post contents: ')
    res.status(201).json({message : 'Resource created successfully !', post :[title, content]})
}

exports.getFileController = (req, res, next)=>{
  res.send("<p> This is image file handler </p> <br/><form action='/feed/putFileData' method='POST' enctype='multipart/form-data'><input type='file' name='image' /><br/><input type='submit' name='submit' /></form>")

}

exports.postFileController = (req, res, next)=>{
    
  const image = req.file;
  console.log(image);
  //res.setHeader('Set-Cookie', ['k1=v1', 'k2=v2'])
  /*
     Notes on Session Based Authentication -
     1.)  Session is a diff type of cookie mechanism that is saved on server side..
     1.1) Meaning since session is created for just one user, if I try to visit same resource from another browser,etc (aka diff session) it won't work
     2.)  Match input credentials with saved credentials in db
     3.)  If matched, create a session for that user (specific session ID)
     4.) Additionally, we can create a callback to check if a session key is active (only set from step 3), and use it in router.get or router.post functions
         This is a route protection mechanism.

     CSRF attack -
     1.) Basically, when the hacker steals the session, and impersonate as valid user
     2.) Avoid it using CSRF token (in Javascript code), generate it and use it, now hacker cannot steal the token
     3.) Actually, include csrf token in every post request. 

  */

  req.session.key1='value1_session';
  res.redirect('/feed/get')
}