import Route from '@ioc:Adonis/Core/Route'

Route.resource('/services', 'ServicesController')
  .apiOnly()
  .middleware({
    store: ['acl:admin'],
    update: ['acl:admin'],
    destroy: ['acl:admin'],
  })
