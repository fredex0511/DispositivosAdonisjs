/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
import DispositivosController from 'App/Controllers/Http/DispositivosController'

Route.get('/dispositivos', 'DispositivosController.index')
Route.get('/iddispositivo/:id', 'DispositivosController.iddispositivo')
Route.get('/pendientes', 'DispositivosController.pendientes')
Route.get('/arreglados', 'DispositivosController.arreglados')

Route.get('/dispositivotelefono/:telefono', 'DispositivosController.telefono')
Route.get('/dispositivoemail/:email', 'DispositivosController.email')
Route.get('/propietariodispositivo/:propietario', 'DispositivosController.propietariodispositivo')
Route.get('/existepropietario/:propietario', 'DispositivosController.existepropietario')
Route.get('/respuestavacia', 'DispositivosController.respuestavacia')



