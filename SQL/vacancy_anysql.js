var sqlVacancyAny =
    '    SELECT \n'+
    '    v.id, \n'+
    '    v.bChecked, \n'+
    '    v.bInvisible, \n'+
    '    v.VacancyShortTitle, \n'+
    '    v.VacancyDescription, \n'+
    '    v.Conditions, \n'+
    '    v.SalaryFrom, \n'+
    '    v.Salary, \n'+
    '    v.JobFunction, \n'+
    '    v.VacancyRequirements, \n'+
    '    v.City, \n'+
    '    v.id_user, \n'+
    '    v.DateTimeCreate, \n'+
    '    v.DisplayPeriod, \n'+
    '    u.Avatar, \n'+
    '    u.UserName, \n'+
    '    ( SELECT  GROUP_CONCAT(Industry) \n'+
    '    FROM  vacancy_Industry vi where vi.id_vacancy = v.id) AS Industry, \n'+
    '    ( SELECT  GROUP_CONCAT(Schedule) \n'+
    '    FROM  vacancy_Schedule vs where vs.id_vacancy = v.id) AS Schedule, \n'+
    '    ( SELECT  GROUP_CONCAT(Employment) \n'+
    '    FROM  vacancy_employment ve where ve.id_vacancy = v.id) AS Employment, \n'+
    '    ( SELECT  GROUP_CONCAT(Education) \n'+
    '    FROM  vacancy_education ved where ved.id_vacancy = v.id) AS Education, \n'+
    '    ( SELECT  GROUP_CONCAT(Experience) \n'+
    '    FROM  vacancy_experience vex where vex.id_vacancy = v.id) AS Experience, \n'+
    '    u.Avatar \n'+
    '    from UserTable u, vacancy v \n'+
    '    where v.bInvisible=false and v.id=? and u.id=v.id_user ';

module.exports=sqlVacancyAny;