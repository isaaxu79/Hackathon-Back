'use strict'
const Publicacion = use('App/Models/Publicacion')
const Database = use('Database')

class PublicacionController {
    async index({ request, response, view }) {

        let publicacions = await Database.table('publicacions')
        return response.status(201).json(publicacions)
    }


    /**
     * Create/save a new class.
     * POST empresas
     */
    async store({ request, response }) {
        let publicacion_data = request.all()

        let publicacion = await Publicacion.create(publicacion_data)

        return response.status(201).json(publicacion)

    }

    /**
     * Display a single class.
     * GET empresas/:id
     */
    async show({ params, request, response, view }) {
        let { id } = params
        let publicacion = await Publicacion.find(id)

        return response.status(201).json(publicacion)
    }


    /**
     * Update class details.
     * PUT or PATCH empresas/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async update({ params, request, response }) {
        let { id } = params
        let publicacion_data = request.all()

        let publicacion = await Publicacion.findOrFail(id)

        publicacion.merge(publicacion_data)

        await publicacion.save()

        return response.status(201).json(publicacion)
    }

    /**
     * Delete a class with id.
     * DELETE empresas/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async destroy({ params, request, response }) {
        let { id } = params
        let publicacion = await Publicacion.findOrFail(id)

        await publicacion.delete()

        return response.status(200).json({
            msg: 'Eliminado'
        })
    }
}

module.exports = PublicacionController
