/*
 * Module dependencies
 */
var express = require('express')
  , stylus = require('stylus')
  , nib = require('nib')

var app = express()

function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .use(nib());
}

app.set('views', __dirname + '/views')
app.set('view engine', 'jade')
app.use(express.logger('dev'))
app.use(stylus.middleware(
  { src: __dirname + '/public'
  , compile: compile
  }
))
app.use(express.static(__dirname + '/public'))


app.get('/', function (req, res)  {res.render('index',  { title : 'Home' } ) } )

app.get('/episodes', function (req, res) {res.render('episodes',  { title : 'Past Episodes' } ) } )

app.get('/episodesh5', function (req, res) {res.render('episodesh5',  { title : 'HTML 5 Video Past Episodes' } ) } )

app.get('/schools', function (req, res) {res.render('schools',  { title : 'Schools' } ) } )

app.get('/search', function (req, res) {res.render('search',  { title : 'Search' } ) } )

app.get('/sports', function (req, res) {res.render('sports',  { title : 'Sports' } ) } )

app.get('/videopage', function (req, res) {res.render('videopage',  { title : 'Video Player Page' } ) } )

app.get('/videopageh5', function (req, res) {res.render('videopageh5',  { title : 'HTML 5 Video Player Page' } ) } )

app.get('/moreepisodes', function (req, res) {res.render('moreepisodes',  { title : 'Past Episodes' } ) } )

app.get('/*', function (req, res) {res.render('notfound',  { title : 'File Not Found' } ) } )

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});