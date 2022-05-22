const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comments extends Model {}

Comments.init({
    // add properites here, ex:
    body: {
        type:DataTypes.TEXT,
        allowNull:false
    },
    date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    }
},{
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment',
});

module.exports=Comments