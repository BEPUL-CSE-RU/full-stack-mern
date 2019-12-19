const express = require('express')
const MovieController = require('../controllers/movie-controller.js')
const router = express.Router()

router.post('/movierouter',MovieController.createMovie)
router.put('/movierouter/:id',MovieController.updateMovie)
router.delete('/movierouter/:id',MovieController.deleteMovie)

router.get('/movierouter/:id',MovieController.getMovieById)
router.get('/getmovies',MovieController.getMovie)


module.exports = router