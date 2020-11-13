const db = require('../db')();
const COLLECTION = "projects";

module.exports = () => {

    const get = async (slug = null) => {
        console.log('     inside projects model');
        if (!slug) {

            try {
                const projects = await db.get(COLLECTION);
                return {
                    projectsList: projects
                };
            } catch (ex) {
                console.log("projects get error")
                return {
                    error: ex
                }
            }
        }
        try {
            const project = await db.get(COLLECTION, {
                slug
            });
            return {
                projectsList: projects
            };
        } catch (ex) {
            return {
                error: ex
            }
        }
    };

    const add = async (slug, name, description) => {
        if (!slug || !name || !description) {
            return {
                error: "You must fill all the fields , check them again"
            }
        }
        const checkProject = await db.get(COLLECTION, {
            slug
        });
        if (checkProject.length === 0) {
            const projectCount = await db.count(COLLECTION);
            const results = await db.add(COLLECTION, {
                id: projectCount + 1,
                slug: slug,
                name: name,
                description: description
            });
            return results.result;
        } else {
            return {
                error: "This slug already exist, try another"
            }
        }
    }

    return {
        get,
        add
    }
};
