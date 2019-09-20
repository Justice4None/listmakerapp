module.exports = function (sequelize, DataTypes) {
    var List = sequelize.define("List", {
        text: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 140],
                notContains: "$"
            }
        },
        conplete: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });
    return List;
};