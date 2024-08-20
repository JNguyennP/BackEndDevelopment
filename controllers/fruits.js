const fruit = require ('../models/Fruit')

const index = async (req, res) => {
    try{
        const fruits = await fruit.showAll();
        res.status(200).send(fruits)

    } catch(err) {
        res.status(500).send({error: 'Server Error'})
    }
}

const show = async (req, res) =>{
    const name = req.params.name.toLowerCase();
    
    try {
        const fruit = await Fruit.show(name);
        res.status(200).send(fruit)

    } catch (err) {
        res.status(404).send({error: err})
    }
}

module.exports = {index, show}