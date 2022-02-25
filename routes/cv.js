var express = require('express');

var router = express.Router();

var db=require('../dbconnection');



/* GET users listing. */
router.get('/', function(req, res, next) {
        db.getConnection()
            .then(conn => {
            conn.query("SELECT * from cv")
            .then((rows) => {
            res.send(JSON.stringify(rows));
           conn.end();
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