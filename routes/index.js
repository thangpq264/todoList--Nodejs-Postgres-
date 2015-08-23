var express = require('express');
var router = express.Router();
var Todo = require('../models/todo.js');
var uuid = require('node-uuid');

/* GET home page. */
router.get('/', function(req, res, next) {
  Todo.findAll({order: '"updatedAt" DESC'}).then(function(results) {
    res.render('index',{data : results});
  });
});

router.post('/', function (req,res) {
  var newTodo = req.body.todo;
  var uuidItem = uuid.v4();
  console.log(uuidItem);
  Todo.create({title : newTodo, uuid : uuidItem}).then(function () {
    res.redirect('/');
  }).catch(function (error) {
        res.redirect('/');
  });
});

router.get('/done/:id', function (req,res) {
  Todo.update({completed : true}, {where :{
    uuid : req.params.id
  }}).then(function() {
    res.redirect('/');
  })
});

router.get('/delete/:id', function (req,res) {
  Todo.destroy({
    where : {
      uuid : req.params.id
    }
  }).then(function () {
    res.redirect('/');
  })
})

module.exports = router;
