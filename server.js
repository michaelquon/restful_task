const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(express.static( __dirname + '/hello-angular/dist' ));

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/restful_tasks');
const path = require('path');
const port = 8000;

var TasksSchema = new mongoose.Schema({
    title: {type: String},
    description: {type: String, default: ""},
    completed: {type: Boolean,  default: false}},
    {timestamps: true});

mongoose.model('Tasks', TasksSchema);
var Tasks = mongoose.model('Tasks')

app.get('/tasks/:id', (req, res)=>{
    console.log("in one route")
    Tasks.findOne({_id: req.params.id}, (err, tasks)=>{
        if(err){
            console.log(err);
        }
        res.json({message: "Success", tasks: tasks})
    })
})
app.get('/tasks', (req, res)=> {
    console.log("in all route")
    Tasks.find({}, (err, tasks)=>{
        if(err){
            console.log(err);
        }
        res.json({message: "Success", tasks: tasks})
    })
})

app.post('/tasks', (req,res)=>{
    var newTasks = new Tasks(req.body)
    newTasks.save((err)=>{
        if(err){
            console.log(newTasks.errors)
        res.json({errors: newTasks.errors})
        }
        else{
            console.log('task added successfully')
            res.redirect('/tasks')
        }
    })
})
app.put('/tasks/:id', (req,res)=>{
    Tasks.update({_id: req.params.id}, req.body,(err)=>{
        if(err){
            console.log(err);
        }
        else{
            res.redirect('/tasks')
        }
    })
})
app.delete('/tasks/:id', (req,res)=>{
    Tasks.remove({_id: req.params.id}, (err)=>{
        if(err){
            console.log(err);
        }
        else{
            res.redirect('/')
        }
    })
})

app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
});