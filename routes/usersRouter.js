const usersRouter = require('express').Router()
const {getUsers, getUser, postUser} = require('../controllers/usersControllers');

usersRouter.route('/users').get(getUsers)

usersRouter.route('/users/:user_id').get(getUser)

module.exports = usersRouter;