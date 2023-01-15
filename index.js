const express=require ('express');
const path=require('path')
//import bodyParser from 'body-parser';
//import usersRoutes from './routes/users.js';


const app=express();
const PORT=5000;

//app.use(bodyParser.json());

//app.use('/users',usersRoutes);



app.use(express.static('public'))

app.engine('html', require('ejs').renderFile);
app.set('view engine','html');
console.log(__dirname)
app.set('views',path.join(__dirname,'views'))

app.get('/', function(req,res) {
 res.render('index');
})
app.listen(PORT,()=>console.log(`Server Running on port: http://localhost:${PORT}`));
module.exports=app