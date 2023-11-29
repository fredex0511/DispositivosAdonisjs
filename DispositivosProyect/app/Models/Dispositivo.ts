import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Dispositivo extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public propietario: string

  @column()
  public problema: string

  @column()
  public telefono: string

  @column()
  public email: string

  @column()
  public estado: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
