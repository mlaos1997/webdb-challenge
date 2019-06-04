const cleaner = require('knex-cleaner');

exports.seed = async function (knex) {
    return cleaner.clean(knex);
}
