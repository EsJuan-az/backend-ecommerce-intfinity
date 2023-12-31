const { Model, DataTypes } = require('sequelize');
const BRANCH_TABLE = 'branches';
const BranchSchema = {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    direction: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
};

class Branch extends Model{
    static config( sequelize ){
        return {
            sequelize,
            tableName: BRANCH_TABLE,
            modelName: 'Branch',
            timestamps: true,
        };
    }
}

module.exports = {
    model: Branch,
    schema: BranchSchema,
    table: BRANCH_TABLE,
};