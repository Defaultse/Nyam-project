// npm init
// npm install express body-parser mysql nodemon
// npm install cors
// npm i --save express express-handlebars mysql body-parser
// npm run devStart
const bodyParser = require('body-parser');
const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors');

app.use(bodyParser.urlencoded({extended: true}));
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())

const db = mysql.createPool({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "root",
    database: "project"
});

app.post('/api/insert', (req,res) => {
    const productTitle = req.body.productTitle;
    const productCategory = req.body.productCategory;
    const productPrice = req.body.productPrice;
    const productDescription = req.body.productDescription;
    const productOwner = req.body.productOwner;
    const productStatus = req.body.productStatus;
    const sqlInsert = "INSERT INTO products_table (owner_id, title, price, description, is_sold, category) VALUES (?,?,?,?,?,?)";
    db.query(sqlInsert, [productOwner, productTitle, productPrice, productDescription, productStatus, productCategory], (err,result) => {
        console.log(err)
    })
});

app.get('/api/get', (req,res) => {
    const sqlGet = "SELECT * FROM products_table";
    console.log(sqlGet);
    db.query(sqlGet, (err,result) => {
        res.send(result);
        console.log(result);
    })
});

app.post('/api/get/product', (req,res) => {
    const product_id = req.body.product_id;
    const sqlGet = "SELECT * FROM products_table WHERE id=?";
    db.query(sqlGet, [product_id], (err, result)=>{
        res.send(result)
        console.log(result)
    })
})

app.post('/api/getUserProducts', (req,res) => {
    const owner_id = req.body.owner_id;
    const sqlGet = "SELECT * FROM products_table WHERE owner_id=?";
    db.query(sqlGet, [owner_id], (err, result)=>{
        res.send(result)
        console.log(result)
    })
})

app.post('/delete/product', (req,res) => {
    const product_id = req.body.product_id;
    const sqlDelete = "DELETE from products_table where id=?";
    db.query(sqlDelete, [product_id], (err, result)=>{
        res.send(result)
    })
})

//             Image
app.post('/upload', async (req, res) => {
    const {name, data} = req.files.pic;
    if (name && data) {
        await knex.insert({name: name, img: data}).into('img');
        res.sendStatus(200);
    } else {
        res.sendStatus(400);
    }
})

app.get('/img/:id', async (req, res) => {
    const id = req.params.id;
    const img = await knex('img').where({id: id}).first();
    if (img) {
        const contentType = await FileType.fromBuffer(img.img);
        res.type(contentType.mime); 
        res.end(img.img);
    } else {
        res.end('No Img with that Id!');
    }
})

//           ACCOUNT MANAGEMENT
app.post('/login', (req,res) => {
    const email = req.body.email;
    const password = req.body.password;
    db.query(
        "Select * FROM users_table WHERE email=?  AND password=?",
        [email, password], 
        (err, result) => {
            if(err) {
                res.send({err: err});
            } 
            if (result.length > 0) {
                res.send(result);
                console.log(result)
            }
            else {
                res.send({message: "Wrong email/pass combination"});
            }
        }
    );
});

app.post("/register-user", (req,res) => {
    const name = req.body.username;
    const email = req.body.email;
    const pass = req.body.password;
    console.log(name+' '+email+' '+pass)
    const sqlInsert = "INSERT INTO users_table (email, username, password) VALUES (?,?,?)";
    db.query(sqlInsert, [email, name, pass], (err,result) => {
        res.send(result)
        console.log(err)
    })
});

app.post('/delete/user', (req,res) => {
    const id = req.body.id;
    console.log('reached=====================')
    const sqlDelete = "DELETE FROM users_table WHERE id=?";
    db.query(sqlDelete, [id], (err, result)=>{
        res.send(result)
        console.log('Account deleted')
    })
})

app.listen(3001, ()=> {
    console.log('running port 3001')
})
