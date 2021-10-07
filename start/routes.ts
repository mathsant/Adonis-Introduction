import Route from '@ioc:Adonis/Core/Route'

Route.get('/', 'UsersController.index')

Route.resource('/users', 'UsersController').apiOnly()
