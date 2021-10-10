import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Service from 'App/Models/Service'
import ServiceValidator from 'App/Validators/Service/ServiceValidator'

export default class ServicesController {
  public async index({}: HttpContextContract) {
    const services = await Service.query().orderBy('id')
    return services
  }

  public async store({ request }: HttpContextContract) {
    const data = await request.validate(ServiceValidator)

    const service = await Service.create(data)
    await service.preload('user')
    return service
  }

  public async show({ params }: HttpContextContract) {
    const service = await Service.findOrFail(params.id)
    return service
  }

  public async update({ params, request }: HttpContextContract) {
    const service = await Service.findOrFail(params.id)
    const data = await request.validate(ServiceValidator)

    service.merge(data)
    await service.save()
    return service
  }

  public async destroy({ params }: HttpContextContract) {
    const service = await Service.findOrFail(params.id)
    await service.delete()
    return 'Deletado!'
  }
}
