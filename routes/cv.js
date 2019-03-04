var express = require('express');
var router = express.Router();


var db=require('../dbconnection');

/* GET users listing. */
router.get('/', function(req, res, next) {
        db.getConnection()
            .then(conn => {
            conn.query("SELECT * from cv")
            .then((rows) => {
            res.setHeader("Content-Security-Policy", "default-src 'self' http://localhost:3000/favicon.ico");
            res.send( rows );
           //res.write(JSON.parse(rows));
           //res.end(JSON.parse(rows));
           conn.end();


//        add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'  https://ajax.googleapis.com  https://ssl.google-analytics.com https://assets.zendesk.com https://connect.facebook.net; img-src 'self' https://ssl.google-analytics.com https://s-static.ak.facebook.com https://assets.zendesk.com; style-src 'self' 'unsafe-inline' https://assets.zendesk.com; font-src 'self' https://fonts.gstatic.com  https://themes.googleusercontent.com; frame-src https://player.vimeo.com https://assets.zendesk.com https://www.facebook.com https://s-static.ak.facebook.com https://tautt.zendesk.com; object-src 'none'";


    })
    .catch(err => {
            //handle error
            conn.end();
    })

    }).catch(err => {
            //not connected
        });


}


);




module.exports = router;