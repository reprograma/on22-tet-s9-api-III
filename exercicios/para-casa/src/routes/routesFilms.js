const filmsController = require('../controllers/controllerFilms')
const express = require('express')
const router = express.Router()

router.get('/filmes', filmsController.getAll) //exibindo todos os filmes
router.patch('/change/director/:id', filmsController.changeDirectorById)
router.patch('/change/runningtime/:id', filmsController.changeRunningTimeById)
router.put('/update/description/:id', filmsController.updateDescriptionById)




module.exports = router