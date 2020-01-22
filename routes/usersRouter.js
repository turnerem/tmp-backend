const usersRouter = require('express').Router()

usersRouter.route('/api/users').get(getUsers).post(postUser)

usersRouter.route('/api/users/:user_id').get(getUser)

module.exports = usersRouter;