const express = require('express');
const app = express();
const bodyParser = require('body-parser')

app.set('view engine', 'pug');
app.set('views', './views');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.get('/start', function (req, res) {
    res.render('dfsinput')
})

// app.get('/handleForm', function (req, res) {
//     var temp = JSON.parse(JSON.stringify(req.query));

//     res.render('handleForm', {
//         "data": temp
//     })
// })

app.post('/bfsout', function (req, res) {
   
    res.render('dfsoutput', {
        value: req.body
    });
    // res.send(html);
})


app.listen(8000);
