const db = require('./projectsDb.js');
const router = require('express').Router();

router.get('/', async(req, res) => {
    try {
        const projects = await db.get();
        if (projects) {
            res
                .status(200)
                .json(projects);
        } else {
            res
                .status(404)
                .json({message: 'We ran into an error retrieving the projects'})
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
        const project = await db.getById(id)
        if (project) {
            res
                .status(200)
                .json(project);
        } else {
            res
                .status(404)
                .json({message: 'We could not find project'});
        }
    } catch (err) {
        res
            .status(500)
            .json({message: err})
    }
});

router.post('/', async(req, res) => {
    const project = req.body;
    if (!project.name || !project.description) {
        res
            .status(400)
            .json({message: 'Please enter name and description for project'})
    } else {
        try {
            const newProject = await db.insert(project);
            if (newProject) {
                res
                    .status(201)
                    .json(newProject);
            }
        } catch (err) {
            res
                .status(500)
                .json({message: err})
        }
    }
});

module.exports = router;