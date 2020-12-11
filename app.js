const express = require('express');
const router = express.Router();
const port = 4000;

const app = express();

// Middlewares
app.set('view engine', 'ejs');

app.get('/', (req,res) => {
    res.render('home');
})

// Docs Routes
app.get('/docs/academics',(req,res)=>{
    res.render('docs/academics');
})
app.get('/docs/finance',(req,res)=>{
    res.render('docs/finance');
})
app.get('/docs/calendar',(req,res)=>{
    res.render('docs/calendar');
})
app.get('/docs/exams',(req,res)=>{
    res.render('docs/exams');
})
app.get('/docs/results',(req,res)=>{
    res.render('docs/results');
})
app.get('/docs/courses',(req,res)=>{
    res.render('docs/courses');
})
app.get('/docs/students',(req,res)=>{
    res.render('docs/students');
})
app.get('/docs/lecturer',(req,res)=>{
    res.render('docs/lecturer');
})
app.get('/help',(req,res)=>{
    res.render('help');
})

app.listen(port, () =>{
    console.log(`Listening on port: ${port}`);
})

