
exports.up = function(knex) {
  return knex.schema.createTable('users', usersTable => {
    usersTable
      .increments('user_id')
      .primary();
    usersTable
      .string('username')
      .notNullable()
      .unique();
    usersTable
      .string('avatar_url')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('users')
};
