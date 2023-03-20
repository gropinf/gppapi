import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'tabwebhook'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
/*      table
        .uuid('id')
        .primary()
        .defaultTo(this.db.rawQuery('uuid_generate_v4()').knexQuery)*/
      table.uuid('id').primary() 
//      table.uuid('uid') 
      table.string('id_filial')
      table.string('id_evento')
      table.bigint('status')
      table.string('tipo_evento')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('data_hora_criacao', { useTz: true })
      table.timestamp('data_hora_ultima_alteracao', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
