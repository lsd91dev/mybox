const project_middleware = {
    nameRequired: (req, res, next) => {
        const name = req.body.name;
        if( !name ){ console.log('Name required'); return; }
        next();
    }
}

module.exports = project_middleware;