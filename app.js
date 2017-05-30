var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var reload = require('reload');
var http = require('http');

var app = express();

var data = JSON.parse(fs.readFileSync('database.json', 'utf-8'));

var id = data.length;
function getId(){
    return id++;
}

app.use(express.static(__dirname + '/'));
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/js', (req, res) => {
    res.sendFile(__dirname + '/js/index.html');
});

app.get('/$', (req, res) => {
    res.sendFile(__dirname + '/$/index.html');
});

app.get('/ng', (req, res) => {
    res.sendFile(__dirname + '/ng/dist/index.html');
});

app.post('/api/read', (req, res) => {
    res.status(200).send(data);
});

app.post('/api/delete', (req, res) => {
    data.forEach(function (ele, ind) {
        if (req.body.id == ele.id) {
            data.splice(ind, 1);
        }
    });
    fs.writeFileSync('database.json', JSON.stringify(data));
    res.status(200).send(data);
});

app.post('/api/update', (req, res) => {
    data.forEach(function (ele) {
        if (ele.id == req.body.id) {
            ele.name = req.body.name;
            ele.number = req.body.number;
        }
    });
    fs.writeFileSync('database.json', JSON.stringify(data));
    res.status(200).send(data);
});

app.post('/api/add', (req, res) => {
    req.body.id = getId();
    data.push(req.body);
    fs.writeFileSync('database.json', JSON.stringify(data));
    res.status(200).send(data);
});


app.post('/api/search', (req, res)=>{
    search = [];
		data.forEach(function (ele) {
			var a = req.body.query.toLowerCase();
            var b = ele.name.toLowerCase();
			var c = ele.number.toLowerCase();
			if (b.indexOf(a) != -1 || c.indexOf(a) != -1) {
				search.push(ele);
			}
		});
		res.status(200).send(search);
});

var server = http.createServer(app);

reload(server, app);

server.listen(8080, 'localhost', () => {
    console.log('Server listerning 8080');
});