use('Shop')

db.employees.find(
    {
        salary:{$nin:[85000,90000,70000]}
    },
    
    {
        "_id":0, name:1, salary:1, 
    }

)