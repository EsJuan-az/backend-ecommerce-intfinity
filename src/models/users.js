const {
    Model,
    DataTypes,
    Sequelize,
 } = require('sequelize');
 
const USER_TABLE = 'users';
//We establish all user fields.
const UserSchema = {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone_number: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true, 
    },
    rol: {
        type: DataTypes.STRING,
        allowNull: false,
    },

};

class User extends Model{
    static associate(){
        //We define relations.
    }
    static config( sequelize ){
        return {
            sequelize,
            tableName: USER_TABLE,
            modelName: 'User',
            timestamps: true,
        };
    }
}

module.exports = {
    model: User,
    schema: UserSchema,
    table: USER_TABLE,
};