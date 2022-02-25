var sqlAnyCV =
'select \n'+
'cv.id, \n'+
'    cv.sEducation, \n'+
'    cv.Skills, \n'+
'    cv.bChecked, \n'+
'    cv.bInvisible, \n'+
'    cv.sExperience, \n'+
'    cv.id_user, \n'+
'    cv.SalaryFrom, \n'+
'    cv.Position, \n'+
'    cv.City, \n'+
'GROUP_CONCAT(distinct(cve.Education)) as Education, \n'+
'GROUP_CONCAT(distinct(cvi.Industry)) as Industry, \n'+
'GROUP_CONCAT(distinct(cvem.Employment)) as Employment, \n'+
'GROUP_CONCAT(distinct(cvs.Schedule)) as Schedule, \n'+
'GROUP_CONCAT(distinct(cvex.Experience)) as Experience \n'+
'from cv LEFT JOIN cv_education cve ON ( cv.id = cve.id_cv) \n'+
'LEFT JOIN cv_industry cvi ON ( cv.id = cvi.id_cv ) \n'+
'LEFT JOIN cv_employment cvem ON ( cv.id = cvem.id_cv ) \n'+
'LEFT JOIN cv_schedule cvs ON ( cv.id = cvs.id_cv ) \n'+
'LEFT JOIN cv_experience cvex ON ( cv.id = cvex.id_cv ) \n'+
'where  cv.bInvisible=false and cv.id=';

module.exports=sqlAnyCV;