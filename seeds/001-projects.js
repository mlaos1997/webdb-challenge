exports.seed = async function (knex) {
    await knex('projects').insert([
        {
            id: 1,
            name: "Backend",
            description: 'Backend Build week',
            completed: false
        }, {
            id: 2,
            name: "Frontend",
            description: 'Frontend Build Week',
            completed: true
        }, {
            id: 3,
            name: "Fullstack",
            description: 'FullStack App',
            completed: false
        }
    ]);
};
