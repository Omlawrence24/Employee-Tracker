// connection brought in to link to My SQL
const mysql = require("mysql");
// connection brought in to link inquirer which enables prompts 
const inquirer = require("inquirer");
// connection brought in to link to change console display for tables 
const cTable = require('console.table');
//enables connection to sql with login info and port
//make sure there is no other server open on port 
const connection = mysql.createConnection({
    host: "localhost",

    port: 3306,
    // connect to SQL via server info!!!
    user: "root",
    // password designated by developer
    password: "root",
    // databease connection to
    database: "employee_tracker_DB",

});

// The Initial prompt triggered to start program
const start = () => {
    inquirer
        //this will allow the user to have several options to choose from
        .prompt({
            name: 'intro',
            type: 'list',
            message: 'What would you like to do?',
            choices: ['View All Employees',
                'View All Department',
                'View All Roles',
                'Add Employee',
                'Add Departments',
                'Add Roles',
                'Update Employee Roles'
            ],

        }).then((response) => {
            console.log(response);
            //Each Function will operate a specic action choosen above
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
                //our default/ if they choose nothing thsi will end connection 
                connection.end();
            }

        });
};

// This function will show all employees in table
const allEmployees = () => {
    const query = connection.query('SELECT * FROM employee', (err, result) => {
        if (err) throw err;
        else {

            console.log(result);
            //THis ensures that they are prompted to the beginning after every loop
            start();
        }
    });
};

//This function shows all departments
const allDepartments = () => {
    const query = connection.query('SELECT * FROM department', (err, result) => {
        if (err) throw err;
        else {

            console.log(result);
            start();
        }
    });
};

//THis functions shows all rows 
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
// This function add new employees 
function addEmployee() {
    return inquirer.prompt([
        // employee prompt
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
            message: "What is the Employee's Role Id? ",
            name: "roleId",
        },
        {
            type: "input",
            message: "What is the Manager's Id?",
            name: "managerId",
        },

    ]).then(function (response) {
        console.log('Lets Create a new Employee ...\n');
        connection.query('INSERT INTO employee SET ?',

            {
                first_name: response.fname,
                last_name: response.lname,
                role_id: response.roleId,
                manager_id: response.managerId,
            },

            function (error) {
                if (error) throw error;
                // console.log(`${res.affectedRows} employee updated!\n`);
                console.log("Employee added !");

                start();


            }
        )

    })

}


// This function adds new departments to tables
function addDepartment() {

    return inquirer.prompt([

        {
            type: "input",
            message: "What is the Name of the Department you would like to add?",
            name: "department",
        },
    ]).then(function (response) {

        console.log('Lets add a new Department...\n');
        connection.query('INSERT INTO department SET ?',
            {
                name: response.department,
            },

            function (error) {
                if (error) throw error;
                
                    console.log("Department added!");
                    start();
            });

    });
}



// This function adds new departments to tables
function addRole() {

    return inquirer.prompt([

        {
            type: "input",
            message: "What role would you like to add",
            name: "role",
        },
    ]).then(function (response) {

        console.log('Lets add a new Role...\n');
        connection.query('INSERT INTO employee_role SET ?',
            {
                name: response.role,
            },

            function (error) {
                if (error)
                    throw error;
                console.log("Role added!");
                start();
                query();
            });

    });
}




// Connect to the DB
connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}\n`);
    start();
});