var db = require("../models");

module.exports = function (app) {
    app.get("/api/list", function (req, res) {
        db.List.findAll({}).then(function (dbList) {
            res.json(dbList);
        });
    });

    app.post("/api/list", function (req, res) {
        console.log(req.body);
        db.List.create({
            text: req.body.text,
            complete: req.body.complete
        }).then(function (dbList) {
        });
    });

    app.delete("/api/list/:id", function (req, res) {
        db.List.destroy({ where: { id: req.params.id } }).then(function (dbList) {
            res.json(dbList);
        });
    });

    app.put("/api/list", function (req, res) {
        db.List.update({
            text: req.body.text,
            complete: req.body.complete
        }, {
            where: {
                id: req.body.id
            }
        }).then(function (dbList) {
            res.json(dbList);
        });
    });
};