var express = require('express')
, app        = express()
, http       = require('http')
, session    = require('express-session')
, passport   = require('passport')
, Strategy   = require('./lib').Strategy
, hljs       = require('highlight.js')
, remarkable = require("remarkable") // Markdown support
, md         = new remarkable({ highlight: function (str, lang) { if (lang && hljs.getLanguage(lang)) { try { return hljs.highlight(lang, str).value; } catch (err) {} } try { return hljs.highlightAuto(str).value; } catch (err) {} return ''; /* use external default escaping */ }})
, cors       = require('cors')
, fs         = require('fs')
, middleware = require("./lib/dbrmiddleware.js")
, compare    = require("string-similarity")
, moment = require("moment")
// set the view engine to ejs
app.set('view engine', 'ejs');
// app.set('views', './')
app.set('views', __dirname +  '/views')
// Set Public folder (can be used by glitch console)
app.use(express.static(__dirname + '/public'))
// Set dir for CSS file
app.use(express.static(__dirname + '/views'))
// make express interpret forms
app.use(express.json());
app.use(express.urlencoded());
app.use(function(req, res, next){
        res.render("end.ejs")
        
        });
app.listen(8080)