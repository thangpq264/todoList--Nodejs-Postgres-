var Sequelize = require('sequelize');
var database = new Sequelize('postgres://Help-14:@localhost:5432/thangpq');
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
            notEmpty: true
        }
    },
    completed : {
        type : Sequelize.BOOLEAN,
        defaultValue : false
    }
}, {freezeTableName : true})

Todo.sync({force : true}).then(function () {
    console.log(data);
    return data.forEach((function (item) {
        Todo.create({title:item});
    }))
});

module.exports = Todo;