import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Tabwebhook from 'App/Models/Tabwebhook'

export default class TabwebhooksController {
  public async index({}: HttpContextContract) {
    const tabwebhook = await Tabwebhook.all()
    return tabwebhook
  }

  public async store({request}: HttpContextContract) {
    const body = request.only(['id_filial', 'id_evento', 'status', 'tipo_evento'])
    const tabwebhook = await Tabwebhook.create(
      {
        id_filial : body.id_filial,
        id_evento : body.id_evento,
        status : body.status,
        tipo_evento : body.tipo_evento
      }
    )
    return tabwebhook
  }

  public async show({request}: HttpContextContract) {
    const tabwebhookid = request.param('id')
    const tabwebhook = await Tabwebhook.find(tabwebhookid)
    return tabwebhook
  }

  public async update({request}: HttpContextContract) {
    const tabwebhookid = request.param('id')
    const body = request.only(['id_filial', 'id_evento', 'status', 'tipo_evento'])
    const tabwebhook = await Tabwebhook.findOrFail(tabwebhookid)
    await tabwebhook.merge(body).save()
    return tabwebhook
  }

  public async destroy({request}: HttpContextContract) {
    const tabwebhookid = request.param('id')
    const tabwebhook = await Tabwebhook.findOrFail(tabwebhookid)
    await tabwebhook.delete()
    return true
  }
}
