import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import { StoreValidator, UpdateValidator } from 'App/Validators/User'
// import Database from '@ioc:Adonis/Lucid/Database'

export default class UsersController {
  public async index({}: HttpContextContract) {
    const users = await User.query().orderBy('id')
    return users
  }

  public async store({ request }: HttpContextContract) {
    const data = await request.validate(StoreValidator)
    const user = await User.create(data)
    return user
  }

  public async show({ params }: HttpContextContract) {
    // RAW QUERY -> const user = await Database.rawQuery(`select * from users where id = ${params.id}`)
    const user = await User.findOrFail(params.id)

    return user
  }

  public async update({ params, request }: HttpContextContract) {
    const user = await User.findOrFail(params.id)
    const data = await request.validate(UpdateValidator)

    user.merge(data)
    await user.save()
    return user
  }

  public async destroy({ params }: HttpContextContract) {
    const user = await User.findOrFail(params.id)
    await user.delete()
  }
}
