const { Model, DataTypes } = require('sequelize');
const ROLE_TABLE = 'roles';
const RoleSchema = {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    permissions: {
        type: DataTypes.ENUM("A", "B", "C", "D", "Z"),
        allowNull: false,
    }
};

class Role extends Model{
    static config( sequelize ){
        return {
            sequelize,
            tableName: ROLE_TABLE,
            modelName: 'Role',
            timestamps: true,
        };
    }
}

module.exports = {
    model: Role,
    schema: RoleSchema,
    table: ROLE_TABLE,
};