const express = require ('express')
const app = express()
const { mongoose, connectDb } = require('./db')
const { SignUpModel , TeacherModel , StudentModel } = require('./schema')
const bodyParser = require("body-parser")
const cors = require('cors')

// console.log(process , "Process")
app.use(bodyParser.json())
app.use(cors())

connectDb();

app.get('/' , async (req,res) => {
    res.send('Server working....')
})

app.get('/createSign' , (req,res) => {  

    const username = req.query.username;
    const password = req.query.password;

    SignUpModel.create({
        username : username , 
        password : password
    })
    .then((dbres) => {
      console.log(dbres)
      res.send(dbres)
    }) 
    .catch((err) => console.log(err))
})

app.post('/getuser' , async (req,res) => {
    const username = req.query.username

    const doc = await SignUpModel.find({
      username : username
    })
    res.send(doc)
    console.log(doc , "doc")
})

app.post('/createTeacher' , (req,res) => {
    
    const name = req.body.name ;
    const qualification = req.body.qualification ;
    const age = req.body.age;
    
    console.log(name)
    TeacherModel.create({
        name ,
        qualification , 
        age  
    })
    .then((dbres) => {
        console.log(dbres)
        res.send(dbres)
      }) 
      .catch((err) => console.log(err))
})

app.post('/createStudent' , async (req,res) => {
    const name = req.body.name ;
    const id = req.body.id ;
    const std = req.body.std ;
    const teacher = req.body.teacher ;

    const doc = await StudentModel.create({
        name : name , 
        id : id ,
        std : std , 
    })
    res.send(doc)
})

app.put('/connectTeacher' , async (req,res) => {
    const studentId = req.body.id ;
    const teachername = req.body.teachername

    const filter = {id : studentId } 
    const update = { teacher : teachername}
    const doc = await StudentModel.findOneAndUpdate(filter , update)

    res.send(doc)
    console.log(doc , "doc")
})

app.put('/connectStudents' , (req,res) => {

    const teachername =  req.body.teachername ;
    const studentsList =  req.body.studentsList

    console.log(teachername)
    console.log(studentsList)
     
    const filter = {name : teachername}
    const update = {students : studentsList}

    TeacherModel.findOneAndUpdate(filter,update)
    .then((dbresponse) => res.send (dbresponse))
    .catch((err) => res.send (err))
})


app.listen(4001 , () => {console.log("Server started at 4000")})

