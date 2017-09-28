var mongoose = require('mongoose');
var players = require('../controllers/players.js');

module.exports = function(app){
    
    app.post('/players', (req, res, next)=>{
        players.new(req, res)
      });

    app.get('/listplayers', function(req, res, next) {
        // console.log("****** Arrived at routes.js")  
        players.getAll(req, res) 
    });
    
    app.delete('/players/:id', function(req, res, next) {
        players.destroy(req, res)
    });

    app.put('/players/:id', function(req, res, next) {
        players.update(req, res)
    });

    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/index.html"))
    });
}

