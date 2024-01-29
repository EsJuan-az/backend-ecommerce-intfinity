const boom = require('@hapi/boom');
const { models: { Branch } } = require('../libs/sequelize');
class BranchService{
    static async findAll( company_id ){
        const branch = await Branch.findAll({
            where: {
                companyId: company_id,
                active: true,
            },
        });
        return branch;
    }
    static async findOne( company_id, id ){
        const branch = await Branch.findOne({
            where: {
                id,
                companyId: company_id,
                active: true,
            },
        });
        if( !branch ){
            throw boom.notFound('branch not found');
        }
        return branch;
    }
    static async create( company_id, data ){
        const branch = await Branch.create( {
            ...data,
            companyId: company_id,
        });
        return branch;
    }
    static async update( company_id, id, data ){
        const branch = await BranchService.findOne( company_id, id );
        const newBranch = await branch.update({
            ...data,
            companyId: company_id,
        });
        return newBranch;
    }
    static async delete( company_id, id ){
        const newBranch = await BranchService.update( company_id, id, { active: false } );
        return newBranch;
    }
}
module.exports = BranchService;