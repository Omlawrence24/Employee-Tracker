const mysql = require("mysql");
const inquirer = require("inquirer");
// const cTable = require('console.table');

const connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",

    password: "root",

    database: "employee_trackerDB",

});


const start = () => {
    inquirer
      .prompt({
        name: 'intro',
        type: 'list',
        message: 'What would you like to do?',
        choices: ['View All Employees',
         'View All Employees By Department',
          'View All Employees By Manager',
           'Add Employee',
           'Remove Employee',
           'Update Employee Role',
           'Update Employee Manager'
        ],
      }).then((choice) => {
          console.log(choice);
    // if (intro.choices === 'View All Employees') {
    //    return allEmployees()
    // // }if (choice.choices === 'View All Employees By Department') {
    // //     return departments();
    // // }if (choice.choices === 'View All Employees By Manager') {
    // //     return managers();
    // // }if (choice.choices === 'Add Employee') {
    // //     return addEmployee();
    // // }if (choice.choices === 'Remove Employee') {
    // //     return removeEmployee();
    // // }if (choice.choices === 'Update Employee Role') {
    // //     return updateRole();
    // // } else if (choice.choices === 'Update Employee Manager') {
    // //     return updateEmployee();
    // //   };
    // };
      });
   
//       start();

//       const allEmployees = () => {
//           connection.query('SELECT * FROM employees',(err,result) =>{
//               if (err) throw err;
//               else {
//               console.log(results);
// }


//           })
    //       }};
}