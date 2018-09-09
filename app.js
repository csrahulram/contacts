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

function startDatabase(){
    setInterval(function (){
        fs.writeFile('database.json', JSON.stringify(data), function(){
            console.log('Data saved : ' + new Date().toUTCString());
        });
    }, 1000 * 60);
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
    res.sendFile(__dirname + '/ng/dist/contacts/index.html');
});

app.get('/api/read', (req, res) => {
    res.status(200).send(data);
});

app.post('/api/delete', (req, res) => {
    data.forEach(function (ele, ind) {
        if (req.body.id == ele.id) {
            data.splice(ind, 1);
        }
    });
    res.status(200).send(data);
});

app.post('/api/update', (req, res) => {
    data.forEach(function (ele) {
        if (ele.id == req.body.id) {
            ele.name = req.body.name;
            ele.number = req.body.number;
        }
    });
    
    res.status(200).send(data);
});

app.post('/api/add', (req, res) => {
    req.body.id = getId();
    data.push(req.body);
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

server.listen(8080, '192.168.0.103', () => {
    console.log('Server listerning 8080');
    //startDatabase();
});


