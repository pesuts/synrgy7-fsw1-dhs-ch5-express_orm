import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('comments', (table: Knex.TableBuilder) => { 
    table.increments('id').primary();
    table.integer('article_id').notNullable();
    table.text('description').notNullable();

    table.foreign('article_id').references('id').inTable('articles').onDelete('CASCADE');
  });
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('comments');
}

