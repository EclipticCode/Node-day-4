const { mongoose } = require('./db')


const Schema = mongoose.Schema;

const SignUpSchema = new Schema ({
    username : {type : String} ,
    password : {type : String}
})

const TeacherSchema = new Schema ({
    name : {type : String} ,
    qualification : {type : String} ,
    age : {type : Number} ,
    id : {type : Number} ,
    students : {type : Array} ,
})

const StudentSchema = new Schema ({
    name : {type : String} , 
    id : {type : Number} , 
    std : {type : String} , 
    teacher : {type : String} , 
})

const SignUpModel = mongoose.model('SignUp' , SignUpSchema )
const TeacherModel = mongoose.model('teachers' , TeacherSchema )
const StudentModel = mongoose.model('students' , StudentSchema )

module.exports = {
    SignUpModel ,
    TeacherModel ,
    StudentModel
}