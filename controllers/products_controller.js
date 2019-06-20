module.exports = {
    create: (req, res) => {
        let db = req.app.get('db')
        db.createProduct(?req.body?).then(response => {
            res.send(response)
        }).catch(err)
    },

    getOne: (req, res) =>{
        let db = req.app.get('db')
        db.readProduct().then(product => res.status(200)
        .send(product)).catch(err)
    },

    getAll: (req, res) => {
        let db = req.app.get('db')
        db.readProducts().then(products => res.status(200).send(products)).catch(err)
    },

    update: (req, res) => {
        let db = req.app.get('db')
        db.updateProduct().then( () => res.sendStatus(200)).catch(err)
    },

    delete: (req, res) => {
        let db = req.app.get('db')
        db.deleteProduct().then( () => res.sendStatus(200)).catch(err)
    }
}