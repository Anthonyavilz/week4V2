let userCompliments = []
let globalId = 0


module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getAllCompliments: (req, res) => {
        res.status(200).send(userCompliments)
    },

    createCompliments: (req, res) => {
        let newUserCompliment = {
            id: globalId,
            message: req.body.value
        }

        userCompliments.push(newUserCompliment)
        globalId++

        res.status(200).send(userCompliments)
    },

    deleteCompliment: (req, res) => {
        const {id} = req.params;

        let index = userCompliments.findIndex(userCompliments => userCompliments.id === +id)
        console.log(userCompliments[index])

        userCompliments.splice(index, 1)

        res.status(200).send(userCompliments)
    }

}