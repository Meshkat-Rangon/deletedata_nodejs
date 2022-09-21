var mysql=require('mysql');
var dbconnect={
    host:'localhost',
    user:'root',
    pass:'',
    database:'school'

}

var con=mysql.createConnection(dbconnect);
con.connect(function(error)
{
    if (error){
        console.log('connection failed');
    }
    else{
        console.log('connection done');
    }
    Updatedb(con);
}

);


function Updatedb(con){
    let sqlquery="UPDATE `std_list` SET `id`='[value-1]',`name`='meshkat',`class`='10',`roll`='34' WHERE 1"
    con.query(sqlquery,function(error)
    {
        if (error){
            console.log('data was not updated');
        }
        else{
            console.log('data updated successfully');
        }
    });
}