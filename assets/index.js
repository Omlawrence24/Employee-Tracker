const mysql = require("mysql");
const inquirer = require("inquirer");

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
        name: '',
        type: 'list',
        message: 'Would you like to [POST] an auction or [BID] on an auction?',
        choices: ['POST', 'BID', 'EXIT'],
      }) 
          
      })
}