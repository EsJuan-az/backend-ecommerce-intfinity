const {
    Model,
    DataTypes,
    Sequelize,
 } = require('sequelize');
 
const USER_TABLE = 'users';
//We establish all user fields.
const UserSchema = {
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true, 
    },
    rol: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },

};

class User extends Model{
    static associations(){
        //We define relations.
    }
    static config( sequelize ){
        return {
            sequelize,
            tableName: USER_TABLE,
            modelName: 'User',
            timestamps: true,
            indexes: [
                {
                    unique: true,
                    fields: ['email', 'CompanyId', 'active']
                },
                {
                    unique: true,
                    fields: ['phone','CompanyId', 'active']
                }
            ],
        };
    }
}

module.exports = {
    model: User,
    schema: UserSchema,
    table: USER_TABLE,
};