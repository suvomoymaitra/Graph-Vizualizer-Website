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
    // var html = '<!DOCTYPE html><!-- This code is for demonstration purposes only.  You should not hotlink to Github, Rawgit, or files from the Cytoscape.js documentation in your production apps. --><html><head><link href="style.css" rel="stylesheet" /><meta charset=utf-8 /><meta name="viewport" content="user-scalable=no, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, minimal-ui"><title>Animated BFS</title><script src="https://cdnjs.cloudflare.com/ajax/libs/cytoscape/3.20.0/cytoscape.min.js"></script><script src="https://cdnjs.cloudflare.com/ajax/libs/cytoscape/3.20.0/cytoscape.esm.js"></script></head><body><div id="cy"></div><!-- Load application code at the end to ensure DOM is loaded --><!-- <script src="index.js"></script> --><script>var cy = cytoscape({container: document.getElementById("cy"),      boxSelectionEnabled: false,autounselectify: true,      style: cytoscape.stylesheet().selector("node").style({"content": "data(id)"}).selector("edge").style({          "curve-style": "bezier","target-arrow-shape": "triangle","width": 4,"line-color": "#ddd","target-arrow-color": "#ddd"}).selector(".highlighted").style({"background-color": "#61bffc","line-color": "#61bffc","target-arrow-color": "#61bffc","transition-property": "background-color, line-color, target-arrow-color","transition-duration": "0.5s"}),elements: {nodes: [{ data: { id: "a" } },{ data: { id: "b" } },{ data: { id: "c" } },{ data: { id: "d" } },{ data: { id: "e" } }],edges: [{ data: { id: "ae", weight: 1, source: "a", target: "e" } },{ data: { id: "ab", weight: 3, source: "a", target: "b" } },{ data: { id: "be", weight: 4, source: "b", target: "e" } },{ data: { id: "bc", weight: 5, source: "b", target: "c" } },{ data: { id: "ce", weight: 6, source: "c", target: "e" } },{ data: { id: "cd", weight: 2, source: "c", target: "d" } },{ data: { id: "de", weight: 7, source: "d", target: "e" } }]},      layout: {name: "breadthfirst",directed: true,roots: "#a",padding: 10}});var bfs = cy.elements().bfs("#a", function(){}, true);var i = 0;var highlightNextEle = function(){if( i < bfs.path.length ){bfs.path[i].addClass("highlighted");i++;setTimeout(highlightNextEle, 1000);}};highlightNextEle();</script></body></html>';
    res.render('dfsoutput', {
        value: req.body
    });
    // res.send(html);
})


app.listen(8000);