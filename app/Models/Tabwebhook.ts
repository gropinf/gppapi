import { DateTime } from 'luxon'
import { BaseModel, beforeSave, column } from '@ioc:Adonis/Lucid/Orm'
import { v4 as uuidv4 } from 'uuid';


//import { withUuid } from '@ioc:Hipsjs/Lucid/Uuid'

//@withUuid({ column: 'uid', version: 'v4' })


export default class Tabwebhook extends BaseModel { 
  static get table (){
    return 'tab_web_hook'
  }
  //public uid: string

  @column({ isPrimary: true })
  public id: string

  @column()
  public id_filial: string

  @column()
  public id_evento: string

  @column()
  public status: number

  @column()
  public tipo_evento: string

  @column.dateTime({ autoCreate: true })
  public data_hora_criacao: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public data_hora_ultima_alteracao: DateTime

  @beforeSave()
  public static generateUUID(tabwebhook: Tabwebhook) {
    tabwebhook.id = uuidv4()
  }
}


