const express = require('express')
const router = express.Router()
const { getGoals, 
        setGoal, 
        updateGoal, 
        deleteGoal 
} = require('../controllers/goalController')

// the "/" is at the end of api/goals/
router.get('/', getGoals)

//creating post
router.post('/', setGoal)

//updating post
router.put('/:id', updateGoal)

//deleting post
router.delete('/:id', deleteGoal)


//you can clean the code up even more with
// router.route('/').get(getGoals).post(setGoal)
// router.route('/:id').delete(deleteGoal).put(updateGoal)

module.exports = router