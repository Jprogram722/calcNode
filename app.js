const express = require('express');

// init app
const app = express();

// setting the view engine in express
app.set('view engine', 'ejs');

// Middleware & Static Files
// Looks for static files like CSS files and applies them
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index', {title: 'Home'});
})

app.listen(process.env.PORT || 3000);