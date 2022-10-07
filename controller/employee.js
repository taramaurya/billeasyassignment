const connection=require('../db/db')
const add = async (req, res) => {
    const {emp_fullname,emp_dept,emp_joiningdate}=req.body;
    const sql="INSERT INTO employee (emp_fullname, emp_dept, emp_joiningdate) VALUES ('"+emp_fullname+"','"+emp_dept+"','"+emp_joiningdate+"')";
    connection.query(
        sql,
        function(err, ResultSetHeader, fields) {
           if(ResultSetHeader.insertId){
            res.send({                      
              'status':'success',
              'msg':'Data Inserted successfully'
           })
           }
        
        }
      );
};


const get = async (req, res) => {
    const sql=`SELECT employee.emp_id,employee.emp_fullname,employee.emp_joiningdate,employee.emp_dept,department.dept_name FROM employee LEFT JOIN department ON department.dept_id=employee.emp_dept`;
    connection.query(
        sql,
        function(err, results, fields) {
            res.send(results)
        }
      );
};

const filter = async (req, res) => {
 // console.log(req.body);
  const {emp_dept,emp_joiningdate}=req.body;
  const sql='SELECT employee.emp_id,employee.emp_fullname,employee.emp_joiningdate,employee.emp_dept,department.dept_name FROM employee LEFT JOIN department ON department.dept_id=employee.emp_dept where emp_dept = "'+emp_dept+'"  &&  emp_joiningdate = "'+emp_joiningdate+'" ';
  console.log(sql);
  connection.query(
      sql,
      function(err, results, fields) {
          res.send(results)
      }
    );
};

module.exports={add,get, filter}
