const mysql = require("mysql");
const inquirer = require("inquirer");
// const fs = require("fs");

const connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",

    password: "root",

    database: "employee_tracker_DB",

});


const start = () => {
    inquirer
        .prompt({
            name: 'intro',
            type: 'list',
            message: 'What would you like to do?',
            choices: ['View All Employees',
                'View All Employees By Department',
                'View All Employees By Roles',
                'Add Employee',
                'Add Departments',
                'Add Roles',
                'Update Employee Manager'
            ],
        }).then((response) => {
            console.log(response);
            if (response.intro === 'View All Employees') {
                allEmployees();
            } else if (response.intro === 'View All Departments') {
                allDepartments();
            } else if (response.intro === 'View All Roles') {
                allRoles();
            } else if (response.intro === 'Add Employee') {
                addEmployee();
            } else if (response.intro === 'Add Departments') {
                addDepartment();
            } else if (response.intro === 'Add Roles') {
                addRole();
            } else if (response.intro === 'Update Employee Role') {
                updateRole();
            } else {
                //our default
                connection.end();
            }

        });
};


const allEmployees = () => {
    const query = connection.query('SELECT * FROM employee', (err, result) => {
        if (err) throw err;
        else {
            //look at activities 13 and 14 to see how they formatted the results in the console
            console.log(result);
            start();
        }
    });
};


const allDepartments = () => {
    const query = connection.query('SELECT * FROM department', (err, result) => {
        if (err) throw err;
        else {
            //look at activities 13 and 14 to see how they formatted the results in the console
            console.log(result);
            start();
        }
    });
};


const allRoles = () => {
    const query = connection.query('SELECT * FROM employee_role', (err, result) => {
        if (err) throw err;
        else {
            //look at activities 13 and 14 to see how they formatted the results in the console
            console.log(result);
            start();
        }
    });
};

function addEmployee() {
    return inquirer.prompt([
        //we also need to add questions for name, email, id
        {
            type: "input",
            message: "What is your Employee's first Name?",
            name: "fname",
        },
        {
            type: "input",
            message: "What is your Employee's Last Name?",
            name: "lname",
        },
        {
            type: "input",
            message: "What is the Employee's Role? ",
            name: "roleId",
        },
        {
            type: "input",
            message: "What is the Manager's Id?",
            name: "managerId",
        },

     ]).then(
    // //     function ({ first_name, last_name, role_id, manager_id }) {
    // // //     connection.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ? ",
    // // //         (response.fname, response.lname, response.roleId , response.managerId), function (err, response) {
    // // //             if (err) throw err;

    // // //         }
    // // //     )
    // // // }

         (response) = () => {
        console.log(response)
        console.log('Lets Create a new Employee ...\n');
        const query = connection.query('INSERT INTO employee SET ?',
            {
                first_name : response.fname,
                last_name : response.lname,
                role_id : response.roleId,
                manager_id : response.managerId,
            },
            (err, response) => {
            if (err) throw err;
            else {
                //look at activities 13 and 14 to see how they formatted the results in the console
                console.log(response);
                start();
       
                      }
     });
     
    
     
// const allEmployees = () => {
//     const query = connection.query('SELECT * FROM employee', (err, result) => {
//         if (err) throw err;
//         else {
//             //look at activities 13 and 14 to see how they formatted the results in the console
//             console.log(result);
//             start();
//         }
//     });
// };

     

// Connect to the DB
connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}\n`);
    start();
});