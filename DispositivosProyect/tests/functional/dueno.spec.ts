import { test } from '@japa/runner'

test.group('Duenos', () => {
  test('dispositivoportelefono', async ({client}) => {
    const response = await client.get('/dispositivotelefono/8715178874')

    response.assertStatus(200)
    response.assertBody({
      msg: "Dispositivos encontrados con el telefono 8715178874",
      data: [
        {
          "id": 1,
          "propietario": "alfredo",
          "problema": "no prende",
          "telefono": "8715178874",
          "email": "alcholico@gmail.com",
          "estado": "pendiente",
          "created_at": null,
          "updated_at": null
        }
      ]
    })
  })

  test('dispositivoemail', async ({client}) => {
    const response = await client.get('/dispositivoemail/josegmail.com')

    response.assertStatus(200)
    response.assertBody({
      msg: "Dispositivos encontrados con el email jose@gmail.com",
      data: [
        {
          "id": 3,
          "propietario": "jose",
          "problema": "no prende",
          "telefono": "8715268822",
          "email": "jose@gmail.com",
          "estado": "pendiente",
          "created_at": null,
          "updated_at": null
        }
      ]
    })
  })

  test('dispositivoporpropietario', async ({client}) => {
    const response = await client.get('/propietariodispositivo/emilio')

    response.assertStatus(200)
    response.assertBody({
      msg: "Dispositivo encontrado",
      data: [
        {
          "id": 2,
          "propietario": "emilio",
          "problema": "procesador quemado",
          "telefono": "8715170091",
          "email": "emilio@gmail.com",
          "estado": "arreglado",
          "created_at": null,
          "updated_at": null
        }
      ]
    })
  })

  test('existepropietario', async ({client, assert}) => {
    const response = await client.get('/existepropietario/emilio')

    const valido = JSON.parse(response.text())

    response.assertStatus(200)
    assert.isTrue(valido.data)
    
  })

  test('respuestavacia', async ({client, assert}) => {
    const response = await client.get('/respuestavacia')

    const valido = JSON.parse(response.text())

    response.assertStatus(200)
    assert.isEmpty(valido.data)
    
  })


});
