// npm init
// npm install express body-parser mysql nodemon
// npm install cors



// npm run devStart
const bodyParser = require('body-parser');
const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors');

app.use(bodyParser.urlencoded({extended: true}));
app.use(cors())
app.use(express.json())

const db = mysql.createPool({
    host: 'localhost',
    port: '3306',
    user: 'root',
    database: 'cruddatabase',
});


app.post('/api/insert', (req,res) => {
    const productTitle = req.body.productTitle;
    const productCategory = req.body.productCategory;
    const productPrice = req.body.productPrice;
    const productDescription = req.body.productDescription;
    const productOwner = req.body.productOwner;
    const productStatus = req.body.productStatus;

    const sqlInsert = "INSERT INTO products_table (owner_id, title, price, description, status, category) VALUES (?,?,?,?,?,?)";
    db.query(sqlInsert, [productOwner, productTitle, productPrice, productDescription, productStatus, productCategory], (err,result) => {
        console.log(err)
    })
});

app.get('/api/get', (req,res) => {
    const sqlGet = "Select * FROM products_table";
    db.query(sqlGet, (err,result) => {
        res.send(result);
    })
});

app.get('/api/get/pass/:email', (req,res) => {
    const email = req.params.email;
    const sqlGet = "SELECT password FROM users_table WHERE email=?";
    db.query(sqlGet, email ,(err,result) => {
        if (err) console.log(err);
    })
});

// // app.put("/api/register-user", (req,res) => {
// //     const name = req.body.userName;
// //     const email = req.body.userEmail;
// //     const pass = req.body.userPassword;
// //     const sqlInsert = "INSERT INTO users_table (email, username, password) VALUES (?,?,?)";
// //     db.query(sqlInsert, [email, name, pass], (err,result) => {
// //         console.log(err)
// //     })
// // });

app.listen(3001, ()=> {
    console.log('running port 3001')
})