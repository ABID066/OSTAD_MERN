db.employees.aggregate([
    {$project:{_id:0, name:1}}
])