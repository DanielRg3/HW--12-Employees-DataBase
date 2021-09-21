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

// We need to initialize the NPM with: $ npm init -y
// We need to import the 'Inquirer' library with: $ npm i inquirer --save
//for the tests we install npm i --save-dev jest

let questions = [
    {
        type: "list",
        message: "Slect from the followgin options:",
        name: "options",
        choices: [
            "All Departments",
            "All Roles",
        ]
    },]

inquirer.prompt(questions).then(function(response) {
    console.log(response);
    if(response.options == "All Departments") {
        db.query('SELECT * FROM department', function (err, results) {
            console.log(results);
        });
    }

})