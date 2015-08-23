var Sequelize = require('sequelize');
var database = new Sequelize('postgres://Help-14:@localhost:5432/thangpq');
var uuid = require('node-uuid');
var data = require('./demo.js').data;

var Todo = database.define('todo', {
    id : {
        type : Sequelize.INTEGER,
        autoIncrement : true,
        primaryKey : true
    },
    title : {
        type : Sequelize.STRING,
        allowNull : false,
        validate : {
            notEmpty : true
        }
    },
    uuid : {
        type : Sequelize.STRING,
        allowNull : false,
        validate : {
            notEmpty : true
        }
    },
    completed : {
        type : Sequelize.BOOLEAN,
        defaultValue : false
    }
}, {freezeTableName : true})

//Todo.sync().then(function () {
//    return data.forEach((function (item) {
//        var uuidItem = uuid.v4();
//        Todo.create({title:item , uuid:uuidItem});
//    }))
//});

module.exports = Todo;