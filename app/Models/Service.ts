import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import User from '../Models/User'

export default class Service extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public value: number

  @column()
  public describe: string

  @column({ serializeAs: null })
  public userId: number

  @belongsTo(() => User, { foreignKey: 'userId' })
  public user: BelongsTo<typeof User>

  @column.dateTime({
    autoCreate: true,
    serialize: (value: DateTime) => {
      return value.toFormat('dd/MM/yyyy HH:mm:ss')
    },
  })
  public createdAt: DateTime

  @column.dateTime({
    autoCreate: true,
    autoUpdate: true,
    serialize: (value: DateTime) => {
      return value.toFormat('dd/MM/yyyy HH:mm:ss')
    },
  })
  public updatedAt: DateTime
}
