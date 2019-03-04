var mariadb=require('mariadb');
var connection=mariadb.createPool({

    host     : 'klipach',
    user     : 'root',
    password : '12345',
    database : 'newjob'
});
module.exports=connection;