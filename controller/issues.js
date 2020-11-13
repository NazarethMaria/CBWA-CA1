const issues = require('../models/issues.js')();

module.exports = () => {

    const getController = async (req, res) => {
        const {
            issuesList,
            error
        } = await issues.get()
        if (error) {
            return res.status(500).json({
                error
            })
        }
        res.json({
            issues: issuesList
        });
    };

    const getById = (req, res) => {
        res.json({
            error: "byId not implemented yet"
        });
    }

    const postController = async (req, res) => {
        const slug = req.params.slug;
        const title = req.body.title;
        const description = req.body.description;
        const status = req.body.status;
        const {
            result,
            error
        } = await issues.add(slug, title, description, status);
        if (error) {
            res.status(400).json(error)
        }
        res.json(result);
    }

    return {
        getController,
        postController,
        getById
    }
} 

