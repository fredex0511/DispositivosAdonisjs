import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Dispositivo from 'App/Models/Dispositivo' 

export default class DispositivosController {

    public async index({response} : HttpContextContract){
            const dispositivos = await Dispositivo.query().exec()

            response.ok({msg:"Dispositivos encontrados",data: dispositivos})
    }

    public async iddispositivo({response, params} : HttpContextContract){

        try{
            const id = params.id
            const dispositivoid = await Dispositivo.findOrFail(id)
    
            response.ok({msg:"Dispositivo encontrado",data: dispositivoid})
        }catch{
            response.badRequest({msg:"Dispositivo no encontrado"})
        }

    }

    public async pendientes({response} : HttpContextContract){
        const dispositivos = await Dispositivo.query().where('estado', 'pendiente').exec()

        response.ok({msg:"Dispositivos pendientes",data: dispositivos})
    }

    public async arreglados({response} : HttpContextContract){
        const dispositivos = await Dispositivo.query().where('estado', 'arreglado').exec()

        response.ok({msg:"Dispositivos arreglados",data: dispositivos})
    }






    public async telefono({ response, params }: HttpContextContract) {
        try {
          const telefono  = params.telefono;
      
          if (!telefono) {
            return response.badRequest({ msg: "El parámetro 'telefono' no está definido o es nulo." });
          }
      
          const dispositivos = await Dispositivo.query().where('telefono', telefono).exec();
      
          response.ok({ msg: `Dispositivos encontrados con el telefono ${telefono}`, data: dispositivos });
        } catch (error) {
          response.status(500).send({ error: error.message });
        }
    }

    public async email({ response, params }: HttpContextContract) {
        try {
          const email  = params.email;
      
          if (!email) {
            return response.badRequest({ msg: "El parámetro 'email' no está definido o es nulo." });
          }
      
          const dispositivos = await Dispositivo.query().where('email', email).exec();
      
          response.ok({ msg: `Dispositivos encontrados con el email ${email}`, data: dispositivos });
        } catch (error) {
          response.status(500).send({ error: error.message });
        }
    }
      
      

    public async propietariodispositivo({response, params} : HttpContextContract){

        try{
            const propietario = params.propietario
            const dispositivopropietario = await Dispositivo.query().where('propietario', propietario).exec();
    
            response.ok({msg:"Dispositivo encontrado",data: dispositivopropietario})
        }catch{
            response.badRequest({msg:"Dispositivo no encontrado"})
        }

    }

    public async respuestavacia({response} : HttpContextContract){
      const dispositivo = await Dispositivo.query().where('propietario', 'alvaro').exec();

       response.ok({dispositivo})

    }
    public async existepropietario({ response, params }: HttpContextContract) {
        try {
          const propietario = params.propietario;
          const dispositivopropietario = await Dispositivo.query().where('propietario', propietario).first();
      
          const dispositivoExiste = !!dispositivopropietario;
      
          if (dispositivoExiste === true){
            response.ok({data: dispositivoExiste });
          }else{
            response.badRequest({ msg: "El propietario no tiene dispositivos" });
          }
        } catch (error) {
          response.badRequest({ msg: "Ocurrió un error al buscar el dispositivo" });
        }
      }
      
      
}
