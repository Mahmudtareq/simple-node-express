const express = require('express');
// follow this line
var cors = require('cors');
const app = express();
// follow this line
app.use(cors());
app.use(express.json());

const port = 5000;
// const port= process.env.PORT || 3000;
app.get('/',(req,res) => {
 res.send('WoW ! I am excited  I  am tareq mahmud!');
});
const users = [
    {id:0, name:'Tareq' ,email:'habu@gmail.com'},
    {id:1, name:'Tanzil' ,email:'habu@gmail.com'},
    {id:2, name:'Mahmud' ,email:'habu@gmail.com'},
    {id:3, name:'Riaz' ,email:'habu@gmail.com'},
    {id:4, name:'Sultana' ,email:'habu@gmail.com'},
]

// how find user using search 
// use query parameter
app.get('/users',(req, res)=>{
    const search = (req.query.search);
    if(search){
        const searchResult = users.filter(user =>user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else{
        res.send(users);
    }
 
});
// specify show details find 
// dynamic parameter
app.get('/users/:id',(req,res)=>{
    const id = req.params.id;
    const user = users[id]
    res.send(user);
})

// post method 
// send data 
// app .METHOD
app.post('/users' , (req, res) =>{
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)
    console.log('hitting the post ',req.body);
    // res.send(JSON.stringify(newUser));
    res.json(newUser);
})
app.get('/fruits',(req, res) => {
    res.send(['mango','orange','banana']);
});
app.get('/fruits/mangoes/fazli',(req, res) =>{
    res.send('moja moja moja mango !');
});

app.listen(port, ()=>{
    console.log('Listening to port',port);
})