const express = require('express');
const path = require('path');
const hbs = require('express-handlebars');
const {engine} = require("express-handlebars");
const users = [
    {
        login: 'vasya',
        password: '12345'
    }, {
        login: 'vasya1',
        password: '12345'
    }, {
        login: 'vasya2',
        password: '1234'
    }, {
        login: 'vasya3',
        password: '1234'
    }
]
//
// app.get('/welcome', ((req, res) => {
//     res.send('hello from server')
// }));
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'static'))); //вказую папку яку буде використовувати апка
app.set('view engine', '.hbs'); // двигун для темплейтів використовуй hbs
app.engine('.hbs', engine({defaultLayout: false}));// вказуємо що відмовляємось від деревинних структур
app.set('views', path.join(__dirname, 'static'));//вказуємо що вюшки які використовуємо лежатимуть в папці статік

app.get('/login', ((req, res) => {
    res.render('login')
}));

app.get('/users', ((req, res) => {
    res.render('users', {users})
}))

app.get('/users/:userId', ((req, res) => {
    const {userId} = req.params;
    res.json(users[userId])
}))


app.post('/login', ((req, res) => {
    users.push(req.body)
    res.redirect('/users')
}));

app.use((req, res) =>{
    res.render('notFound')
} )

app.listen(5200, () => {
    console.log('Server has started on PORT 5200')
});