exports.up = async function (knex) {
    await knex
        .schema
        .createTable('projects', tbl => {
            tbl.increments('id');
            tbl
                .string('name', 128)
                .notNullable()
                .unique();
            tbl
                .string('description', 256)
                .notNullable();
            tbl.boolean('completed');
        });

    await knex
        .schema
        .createTable('actions', tbl => {
            tbl.increments('id');
            tbl
                .integer('project_id')
                .notNullable()
                .references('id')
                .inTable('projects')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
            tbl
                .string('description', 256)
                .notNullable()
                .unique();

            tbl
                .string('notes', 256)
                .notNullable();
            tbl.boolean('completed');
        });
};

exports.down = async function (knex) {
    await knex.schema.dropTableIfExists('projects');
    await knex.schema.dropTableIfExists('actions');
};
