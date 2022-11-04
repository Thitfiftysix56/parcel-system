const express = require('express');
const app = express();
const mysql = require('mysql2');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
const cors = require('cors');
const bcrypt = require('bcrypt');
const saltRounds = 10;
var jwt = require('jsonwebtoken');
const secret = 'Fullstack-Login-2021'

dotenv.config();

app.use(express.json());


const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
  };

  app.use(cors(corsOptions));
  
// app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// db connection
var con = mysql.createConnection({
    host: process.env.HOST,
    user:process.env.USER,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
})
con.connect(function (err){
    if (err) {
        console.log("Error connecting to database")
    }
    else {
        console.log("Connection established")
    }
})

// interface database

app.post('/PageSignUp', jsonParser , (req, res,next) => {
    const Iduser = req.body.Iduser
    const Rank = req.body.Rank
    const Name = req.body.Name
    const LastName = req.body.LastName
    const Email = req.body.Email + "@rtaf.mi.th"
    const Password = req.body.Password
    const Division = req.body.Division
    const Position = req.body.Position
    const Department = req.body.Department
    const Approv = 0
    const Status = "รออนุมัติ"

    bcrypt.hash(Password, saltRounds, function(err, hash) {
        con.query(`INSERT INTO tbuser (Iduser , Rank , Name , Lastname , Email , Password , Division , Position , Department , Approv , Status) VALUES(?,?,?,?,?,?,?,?,?,?,?)`,
        [Iduser , Rank , Name , LastName , Email , hash , Division , Position , Department,Approv ,Status],
        (err, result)=> {
            if(err) {
                console.log(err);
            }else{
                res.send("Values inserted Success")
            }
        })
    });
})


app.post('/login', jsonParser , (req, res)=> {
    const Email = req.body.Email + "@rtaf.mi.th"
    const Password = req.body.Password

    con.query(`SELECT * FROM tbuser WHERE Email = ?`,
    [Email],
    (err, users , fields)=> {
        // console.log(users.length)
  if(err){
     res.json({status: 'error' , message:err}) ; return
  }
  if(users.length === 0 ){
    res.json({status: 'error' , message: 'no user found'}); return
  }
  bcrypt.compare(Password, users[0].Password, (err, isLogin)=> {
    if(isLogin){
        var token = jwt.sign({ Email: users[0].Email,Password: users[0].Password,User:users  }, secret, { expiresIn:'1h' });
        res.json({status: 'ok' , message:'login success',token})
    } else {
        res.json({status: 'error' , message:'login failed'})
    }
});
    })
   
})

// app.post('/authen' ,jsonParser , (req, res)=> {
//     try{
//         const token = req.headers.authorization.split(' ')[1]
//         var decoded = jwt.verify(token , secret)
//         res.json({status: 'ok' , decoded})
//     } catch(err){
//         res.json({Status: 'error' , message:err.message})
//     }
// })

app.get('/PageManage' , (req, res)=> {
    con.query("SELECT tbuser.IdUser as id , Rank , Name , LastName , Email , Password , Division , Position , Department ,Approv , Status FROM tbuser", (err,result) => {
        if(err){
            console.log(err);
        }else{
            res.send(result);

        }
    })
})


const listener = app.listen(process.env.PORT || 8080, () => {
    console.log('App is listening on port ' + listener.address().port)
})