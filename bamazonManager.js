var mysql = require("mysql");
var inquirer = require("inquirer");
var choices = [];
// const quantity = 10;
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
        
        connection.query("SELECT * FROM bamazon_db.products", function (err, result) {
            if (err) throw err;
            for (let x = 0; x < result.length; x++) {
                const element = result[x];
                choices.push("Item ID: " + `${element.id + "||" + element.product_name+ "||" +"$"+ element.price}`)
                
                
            }
            start();
        })
             
    })
    

//this is where i ask the first question in the prompt
function start() {
    inquirer
      .prompt({
        name: "CarType:",
        type: "list",
        message: "What is the ID of the car you would like to buy!?",
        choices : choices 
      })
    .then(function( answer) {
       
        // console.log(answer.element['Item ID']);
        console.log(answer);
        
        quantity2(5);
    })
  
};



function quantity2(answer) {
    inquirer
        .prompt({
        name: "buy",
        type: "input",
        message: "How many would you like to buy?",
        })
  
    .then(function(any) {
     
        connection.query("UPDATE bamazon_db.products SET ? WHERE ?", 


        [{stock_quantity: 5  },{id: 5}],

    function(err,res) {
            
        
        
    });
            
    
    })    
}


