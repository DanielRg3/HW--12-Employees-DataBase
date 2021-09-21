var inquirer = require('inquirer');
const mysql = require('mysql2');

const db = mysql.createConnection (
    {
        host: 'localhost',
        user: 'root',
        password: 'Mysql#13',
        database: 'employees_db'
    },
    console.log(`Connected to employees_db!!!`)
);

let questions = [
    {
        type: "list",
        message: "Slect from the followgin options:",
        name: "options",
        choices: [
            "All Departments",
            "All Roles",
            "All Employees",
            "Add a Department",
            "Add a Role",
            "Add and Employee",
            "Update and Employee Role",
        ]
    },
]

inquirer.prompt(questions).then(function(response) {
    console.log(response);
    if(response.options == "All Departments") {
        db.query('SELECT * FROM department', function (err, results) {
            console.log(results);
        });
    }
    if(response.options == "All Roles") {
        db.query('SELECT * FROM role', function (err, results) {
            console.log(results);
        });
    }
    if(response.options == "All Employees") {
        db.query('SELECT * FROM employee', function (err, results) {
            console.log(results);
        });
    }

})