// Первая цифра минуты, вторая цифра часы. Строка '10 15 * * *' это 15:10 (десять минут четвертого)

var sSQL =
'select cv.id as id_cv, cv.id_user as id_user_cv, cv.position as cv_position , \n'+
'v.id as id_vc, v.id_user as id_user_vc, v.sMailingMask, cv.DateTimeCreate \n'+
'from cv, vacancy v \n'+
'where \n'+
'cv.position rlike replace(v.sMailingMask, \',\', \'|\' ) and v.bMailing = true \n'+
'and cv.DateTimeCreate>= CURDATE() - interval 1 week'

module.exports=sSQL;