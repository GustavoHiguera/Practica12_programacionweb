var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use('/', function (req, res, next) {
    console.log('Request Url:' + req.url);
    next();
});

app.get('/', function (req, res) {
    res.render('index');
});

app.get('/numbers/:id', function (req, res) {
    res.render('numbers', {ID: req.params.id})
})
//En la vista se aplica una lógica en la que se recibe el valor de ID, 
//Y en la misma vista se hace el procesamiento para ver si es par o no,
//si es par, se imprime una list item con el doble del valor del número
//recibido, y si es impar una list item con el valor del número.
//Es importante entender esto porque todo el procesamiento lo hace la vista,
//mientras que el servidor solo se dedica a enviar y recibir el dato.

//También es importante observar que en la vista ejs se usa sintaxis y lógica
//de Javascript, por lo que conociendo el lenguaje es fácil manejar la herramienta.

//Aunque a principio la práctica se veía complicada, conociendo que ejs maneja la sintáxis de js
//en un archivo html válido, es fácil el determinar la función para mostrar los números.


app.listen(port);