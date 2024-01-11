const { Model, DataTypes } = require('sequelize');
const ROLE_TABLE = 'roles';
const RoleSchema = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true, // Hace que el ID sea autoincremental
        allowNull: false,
      },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    permissions: {
        type: DataTypes.ENUM("A", "B", "C", "D", "Z"),
        allowNull: false,
    },
};

class Role extends Model{
    static associate({
        User,
    }){
        this.hasMany( User, { as: 'users', foreignKey: 'roleId' });
    }
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