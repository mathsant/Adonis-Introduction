import { schema } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ServiceValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    value: schema.number(),
    describe: schema.string({ trim: true }),
    user_id: schema.number(),
  })

  public messages = {
    required: 'O {{ field }} é obrigatorio!',
  }
}
