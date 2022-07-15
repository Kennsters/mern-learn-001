const express = require('express')
const router = express.Router()
const { getGoals, 
        setGoal, 
        updateGoal, 
        deleteGoal 
} = require('../controllers/goalController')

const { protect } = require('../middleware/authMiddleware')

// the "/" is at the end of api/goals/
// router.get('/', protect, getGoals)

// //creating post
// router.post('/', setGoal)

// //updating post
// router.put('/:id', updateGoal)

// //deleting post
// router.delete('/:id', deleteGoal)


//you can clean the code up even more with
router.route('/').get(protect, getGoals).post(protect, setGoal)
router.route('/:id').delete(protect, deleteGoal).put(protect, updateGoal)

module.exports = router