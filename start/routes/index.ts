import Route from '@ioc:Adonis/Core/Route'
import './auth'
import './users'
import './services'

Route.get('/', 'UsersController.index')
