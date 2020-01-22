
exports.up = function(knex) {
  return knex.schema.createTable('messages', (messagesTable) => {
    messagesTable.increments('message_id').primary();
    messagesTable.text('body').notNullable();
    messagesTable.timestamp('sent_at').defaultTo(knex.fn.now())
    messagesTable.string('sent_by').references('users.username')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('messages')
};
