const db = require('../../data/dbConfig');

module.exports = {
    get,
    getById,
    insert,
    update,
    remove
};

async function get() {
    const projects = await db('projects');
    projects.forEach(project => {
        project.completed === 1
            ? (project.completed = true)
            : (project.completed = false)
    });
    return projects;
};

function getById(id) {
    return db('projects')
        .select({id: "projects.id", name: "projects.name", description: "projects.description", completed: "projects.completed"})
        .where({"projects.id": id})
        .first();
};

async function insert(project) {
    const newProject = await db('projects').insert(project)
    if (newProject) {
        const insert = await getById(id);
        insert.completed === 1
            ? (insert.completed === true)
            : (insert.completed === false)
        return insert;
    };
};

async function update(id, changes) {
    const updatedProject = await db('projects')
        .where({id})
        .update(changes);
    if (updatedProject) {
        const project = await getById(id);
        return project;
    };
};

async function remove(id) {
    const project = await getById(id);
    if (project) {
        const deletedProject = await db('projects')
            .where({id})
            .del();
        if (deletedProject) {
            return project;
        }
    }
};