const { usersData} = require('../data/index');

exports.seed = function(knex) {
    return knex.migrate
    .rollback()
    .then(() => {
        return knex.migrate.latest()
    })
    .then(() => {
        return knex('users')
        .insert(usersData)
        .returning("*")
    })
}