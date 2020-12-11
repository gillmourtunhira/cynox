const express = require('express');
const port = 4000;
const students = require('./models/Students');

const app = express();

// Middlewares
app.set('view engine', 'ejs');
app.use(express.static('public'));


app.get('/', (req,res) => {
    res.render('home', {
        title: 'Documentation'
    });
})

// Docs Routes
app.get('/docs/academics',(req,res)=>{
    res.render('docs/academics', {
        title: 'Academics'
    } );
})
app.get('/docs/finance',(req,res)=>{
    res.render('docs/finance',{
        title: 'Finance'
    });
})
app.get('/docs/calendar',(req,res)=>{
    res.render('docs/calendar',{
        title: 'Calendar'
    });
})
app.get('/docs/exams',(req,res)=>{
    res.render('docs/exams',{
       title: 'Exams' 
    });
})
app.get('/docs/results',(req,res)=>{
    res.render('docs/results',{
        title: 'Results'
    });
})
app.get('/docs/courses',(req,res)=>{
    res.render('docs/courses',{
        title: 'Courses'
    });
})
app.get('/docs/students',(req,res)=>{
    res.render('docs/students',{
        title: 'Students',
        students
    });
})
app.get('/docs/lecturer',(req,res)=>{
    res.render('docs/lecturer',{
        title: 'Lecturer'
    });
})
app.get('/help',(req,res)=>{
    res.render('help',{
        title: 'Help'
    });
})

app.listen(port, () =>{
    console.log(`Listening on port: ${port}`);
})

