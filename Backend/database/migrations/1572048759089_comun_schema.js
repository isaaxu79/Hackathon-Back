'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ComunSchema extends Schema {
  up () {
    this.create('comuns', (table) => {
      table.increments()
      table.string('apellido').notNullable()
      table.date('fechaNacimiento').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('comuns')
  }
}

module.exports = ComunSchema
