exports.seed = async function (knex) {
    await knex('actions').insert([
        {
            id: 1,
            description: 'Need to sketch UI Design',
            notes: 'Built file structure',
            completed: false,
            project_id: 1
        }, {
            id: 2,
            description: 'Need create SQL Schema',
            notes: 'Added files',
            completed: true,
            project_id: 1
        }, {
            id: 3,
            description: 'FullStack Description',
            notes: 'Full Stack Notes',
            completed: false,
            project_id: 1
        }
    ])
};
