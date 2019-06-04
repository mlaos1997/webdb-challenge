const db = require('../../data/dbConfig');

module.exports = {
    get,
    getById,
    insert,
    update,
    remove
};

async function get() {
    const actions = await db('actions');
    actions.forEach(action => {
        action.completed === 1
            ? (action.completed = true)
            : (action.completed = false)
    });
    return actions;
};

function getById(id) {
    return db('actions')
        .where({ id })
        .first();

};

async function insert(changes) {
    const action = await db('actions').insert(changes)
    if (action) {
        const newAction = await getById(id);
        return newAction;
    };
};

async function update(id, changes) {
    const updatedAction = await db('actions')
        .where({id})
        .update(changes);
    if (updatedAction) {
        const action = await getById(id);
        return action;
    };
};

async function remove(id) {
    const action = await getById(id);
    if (action) {
        const deletedAction = await db('actions')
            .where({id})
            .del();
        if (deletedAction) {
            return action;
        }
    }
};