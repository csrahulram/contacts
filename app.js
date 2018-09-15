var express = require('express');
var bodyParser = require('body-parser');
var formidable = require('formidable');
var fs = require('fs');
var reload = require('reload');
var http = require('http');
var bodyParser = require('body-parser');
var path = require('path');
//var cookieParser = require('cookie-parser');

var app = express();

var data = JSON.parse(fs.readFileSync('database.json', 'utf-8'));

var id = data.length;
function getId() {
    return id++;
}

function startDatabase() {
    setInterval(function () {
        fs.writeFile('database.json', JSON.stringify(data), function () {
            console.log('Data saved : ' + new Date().toUTCString());
        });
    }, 1000 * 60);
}

app.use(express.static(__dirname + '/'));
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));

const cors = require('cors')

var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}

app.use(cors(corsOptions));


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

app.delete('/api/delete/:id', (req, res) => {
    data.forEach(function (ele, ind) {
        if (req.params.id == ele.id) {
            data.splice(ind, 1);
        }
    });
    res.status(200).send(data);
});

app.put('/api/update', (req, res) => {
    data.forEach(function (ele, ind) {
        if (ele.id == req.body.id) {
            data[ind] = req.body;
        }
    });

    res.status(200).send(data);
});

app.post('/api/upload', (req, res) => {
    console.log('comming')
    var _file;
    //console.log('Incomming upload stream...');
    // create an incoming form object
    var form = new formidable.IncomingForm();
    //console.log('what happen');
    // form.multiples = true;
    // // store all uploads in the /uploads directory
    form.uploadDir = path.join(__dirname, '/profiles/');

    form.on('fileBegin', function (name, file){
        _file = file;
        file.path = __dirname + '/profiles/' + file.name;
    });

    //console.log(req.body.details);

    // // log any errors that occur
    // form.on('error', (err) => {
    //     console.log('An error has occured: \n' + err);
    // });



    // // once all the files have been uploaded, send a response to the client
    form.on('end', (files) => {
        //console.log('All file(s) recieved successfully ' + files);
        //console.log('Processing uploaded file(s)...\n');
        // fileProcessor.process(files, (e) => {
        //   console.log('All file(s) processed successfully\n');
        //   pushToDb.startPushing(e.data.files, (data) => {
        //     //console.log(data);
        //     console.log('Return data back to client');
        //     res.send({ 'status': 201, 'message': 'Your file(s) is processed successfully.', 'data':data});
        //   });
        // });
        console.log(_file);
        res.send({ 'status': 201, 'message': 'Profile uploaded successfully', 'data':{'name':_file.name}});
    });
    // parse the incoming request containing the form data
    form.parse(req);


    // req.body.id = getId();
    // if(!req.body.profile){
    //     req.body.profile = 'dummy.png';
    // }
    // data.push(req.body);
     //res.status(200).send('Picture upload success');
});

app.post('/api/add', function(req, res){
    req.body.id = getId();
    if(!req.body.profile){
        req.body.profile = 'dummy.png';
    }
    data.push(req.body);
    res.status(200).send(data);
})


app.get('/api/search/:query', (req, res) => {
    search = [];
    data.forEach(function (ele) {
        var a = req.params.query.toLowerCase() || '';
        var b = ele.name.toLowerCase();
        var c = ele.phone.toLowerCase();
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
    startDatabase();
});


