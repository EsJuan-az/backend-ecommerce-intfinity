const { Model, DataTypes } = require('sequelize');
const BRANCH_PRODUCT_TABLE = 'branches_products';
const BranchProductSchema = {
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}

class BranchProduct extends Model{
    static config( sequelize ){
        return {
            sequelize,
            tableName: BRANCH_PRODUCT_TABLE,
            modelName: 'BranchProduct',
            timestamps: true,
        };
    }
}
module.exports = {
    model: BranchProduct,
    schema: BranchProductSchema,
    table: BRANCH_PRODUCT_TABLE,
}