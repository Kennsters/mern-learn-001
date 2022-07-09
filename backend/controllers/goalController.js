//here we control all the routes

//description -> get goals
//route -> GET/api/goals
//access -> private
const getGoals = (req, res) => {
    res.status(200).json({ message: 'Get Goals' })
}

//description -> set goals
//route -> POST /api/goals
//access -> private
const setGoal = (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json({ message: 'Set Goal' })
}

//description -> update goal
//route -> PUT /api/goals/:id
//access -> private
const updateGoal = (req, res) => {
    res.status(200).json({ message: `Update goal ${req.params.id}` })
}

//description -> delete goals
//route -> DELETE /api/goals
//access -> private
const deleteGoal = (req, res) => {
    res.status(200).json({ message: `Delete goal ${req.params.id}` })
}

module.exports = {
    getGoals,
    setGoal,
    updateGoal, 
    deleteGoal
}