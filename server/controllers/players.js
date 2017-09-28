var mongoose = require('mongoose');
var Player = mongoose.model('Player');

module.exports = {

    getAll: function (req, res) {
        // console.log(1, "arrived at players.js")
        Player.find({}, function (err, players) {
            // console.log(2)
            res.json(players);
            // console.log(3);
        })
    },


    new: function (req, res) {
        console.log("Here's what we got from the front end:", req.body);
        let newPlayer = new Player(req.body);
        // console.log(4, "Before we save...", newPlayer)
        newPlayer.save(function (err) {
            if (err) {
                console.log('something went wrong when creating new Player');
                return res.json();

            }
            else {
                console.log(5, "Player added to database:", newPlayer)
                return res.json();
            }
        })
    },

    destroy: function (req, res, id) {
        console.log(1, "Removing player...")
        Player.findByIdAndRemove(req.params.id, function (err) {
            console.log(2)
            if (err) {
                console.log('something went wrong when deleting Player');
                res.json(err);

            }
            else {
                console.log(5, "Player deleted from database:")
                Player.find({}, function (err, players) {
                    // console.log(2)
                    res.json(players);
                    // console.log(3);
                })
            }
        })
    },

    update: function (req, res) {
        console.log(1, "Updating player...")
        Player.findById(req.params.id, function (err, player) {
            if (err) {
                console.log('Could not find player by id.');
                res.json(err);

            }
            else {
                console.log(2)
                player['game' + req.body.game]= req.body.status;
                player.save(function (err) {
                    if (err) {
                        console.log('Could not save updates to Player');
                        return res.json();
        
                    }
                    else {
                        console.log(3, "Player updates successfully saved");
                        Player.find({}, function (err, players) {
                            res.json(players);
                        })
                    }
                })                
            }
        })
    },

    // closing curly brace: don't paste over!
}

