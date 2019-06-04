const db = require('./actionsDb.js');
const router = require('express').Router();

router.get('/', async(req, res) => {
    try {
        const actions = await db.get();
        if (actions) {
            res
                .status(200)
                .json(actions);
        } else {
            res
                .status(404)
                .json({message: 'We ran into an error retrieving the actions'})
        }
    } catch (err) {
        res
            .status(500)
            .json({message: err})
    }
});

router.get('/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const action = await db.getById(id)
        if (action) {
            res
                .status(200)
                .json(action);
        } else {
            res
                .status(404)
                .json({message: 'We could not find action'});
        }
    } catch (err) {
        res
            .status(500)
            .json({message: err})
    }
});

router.post('/', async(req, res) => {
    const action = req.body;
    if (!action.description) {
        res
            .status(400)
            .json({message: 'Please enter a description'})
    } else {
        try {
            const newAction = await db.insert(action)
            if (newAction) {
                res
                    .status(201)
                    .json(newAction);
            }
        } catch (err) {
            res
                .status(500)
                .json({message: err})
        }
    }
});

router.delete('/:id', async(req, res) => {
    const {id} = req.params;
    try {
        const action = await db.remove(id);
        if (action) {
            res
                .status(200)
                .json(actions);
        } else {
            res
                .status(404)
                .json({message: 'That action does not exist, perhaps it was deleted alreaady'})
        }
    } catch (err) {
        res
            .status(500)
            .json({message: err})
    }
});

module.exports = router;