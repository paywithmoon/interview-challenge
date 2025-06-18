exports.up = function(knex) {
  return knex.schema.createTable('accounts', function(table) {
    table.increments('id').primary();
    table.decimal('balance', 10, 2).notNullable().defaultTo(0);
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('accounts');
}; 