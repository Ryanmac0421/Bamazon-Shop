var mysql = require("mysql");
var inquirer = require("inquirer");
var choices = [];
const quantity = 10;
var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "root",
    database: "bamazon_db"
  });

// connect to the mysql server and sql database
connection.connect(function(err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    
    connection.query("SELECT * FROM bamazon_db.products", function (err, result, fields) {
        if (err) throw err;
        for (let x = 0; x < result.length; x++) {
            const element = result[x];
            choices.push(`${element.id + "||" + element.product_name+ "||" +"$"+ element.price}`)
            
        }
     
         start();
      });
   
});

function start() {
    inquirer
      .prompt({
        name: "Car Type:",
        type: "list",
        message: "What would you like to buy!?",
        choices: choices
      })
    .then(function(answer) {
       
        console.log(answer);
       
    })


    .then(function(answer) {
       
        console.log("How many would you like to buy?");

    })

    // if (condition) {
        
    // }



}


function purchase(answer) {
       
        if (this.stock_quantity = 0) {
            console.log("Sorry, we are sold out!");
            
        }
        console.log("Purchase complete!");
            stock_quantity --;
            console.log("We now have "+ stock_quantity + " left!" );

}  

function reject(answer) {

    if (this.stock_quantity = 0) {
        console.log("Sorry, we are sold out!");
        
    }

 }



// The first should ask them the ID of the product they would like to buy.
// The second message should ask how many units of the product they would like to buy.


