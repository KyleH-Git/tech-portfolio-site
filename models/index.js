const Account = require('./Account');
const Developer= require('./Developer')

Account.hasOne(Developer, {
    foreignKey: 'account_id',
    onDelete: 'CASCADE'
});

Developer.belongsTo(Account, {
    foreignKey: 'account_id',
    onDelete: 'CASCADE'
});

module.exports = { Developer, Account };
