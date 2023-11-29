import { test } from '@japa/runner'

test.group('Dispositivo', () => {
  
  test('obtenerdispositivos', async ({client}) => {
    const response = await client.get('/dispositivos')

    response.assertStatus(200)
    response.assertBodyContains({data: [
      {
        "id": 1,
        "propietario": "alfredo",
        "problema": "no prende",
        "telefono": "8715178874",
        "email": "acholico@gmail.com",
        "estado": "pendiente",
        "created_at": null,
        "updated_at": null
      },
      {
        "id": 2,
        "propietario": "emilio",
        "problema": "procesador quemado",
        "telefono": "8715170091",
        "email": "emilio@gmail.com",
        "estado": "arreglado",
        "created_at": null,
        "updated_at": null
      },
      {
        "id": 3,
        "propietario": "jose",
        "problema": "no prende",
        "telefono": "8715268822",
        "email": "jose@gmail.com",
        "estado": "pendiente",
        "created_at": null,
        "updated_at": null
      },
      {
        "id": 4,
        "propietario": "aranda",
        "problema": "limpieza",
        "telefono": "8715728338",
        "email": "aranda@hotmail.com",
        "estado": "arreglado",
        "created_at": null,
        "updated_at": null
      },
      {
        "id": 5,
        "propietario": "ricardo",
        "problema": "bateria quemada",
        "telefono": "8747152833",
        "email": "ricardo@hotmail.com",
        "estado": "pendiente",
        "created_at": null,
        "updated_at": null
      }
    ]})
  })


  test('encontrardispositivoespec', async ({client}) => {
    const response = await client.get('/iddispositivo/1')

    response.assertStatus(200)
    response.assertBodyContains({data: {
      "id": 1,
      "propietario": "alfredo",
      "problema": "no prende",
      "telefono": "8715178874",
      "email": "acholico@gmail.com",
      "estado": "pendiente",
      "created_at": null,
      "updated_at": null
    }})
  })
  
  test('fallardispositivoespec', async ({client}) => {
    const response = await client.get('/iddispositivo/100')

    response.assertStatus(400)
    response.assertBody({msg : 'Dispositivo no encontrado'})
  })

  test('obtenerarreglados', async ({client}) => {
    const response = await client.get('/arreglados')

    response.assertStatus(200)
    response.assertBodyContains({"data": [
      {
        "id": 2,
        "propietario": "emilio",
        "problema": "procesador quemado",
        "telefono": "8715170091",
        "email": "emilio@gmail.com",
        "estado": "arreglado",
        "created_at": null,
        "updated_at": null
      },
      {
        "id": 4,
        "propietario": "aranda",
        "problema": "limpieza",
        "telefono": "8715728338",
        "email": "aranda@hotmail.com",
        "estado": "arreglado",
        "created_at": null,
        "updated_at": null
      }
    ]})
  })

  test('obtenerpendientes', async ({client}) => {
    const response = await client.get('/pendientes')

    response.assertStatus(200)
    response.assertBodyContains({data: [
      {
        "id": 1,
        "propietario": "alfredo",
        "problema": "no prende",
        "telefono": "8715178874",
        "email": "acholico@gmail.com",
        "estado": "pendiente",
        "created_at": null,
        "updated_at": null
      },
      {
        "id": 3,
        "propietario": "jose",
        "problema": "no prende",
        "telefono": "8715268822",
        "email": "jose@gmail.com",
        "estado": "pendiente",
        "created_at": null,
        "updated_at": null
      },
      {
        "id": 5,
        "propietario": "ricardo",
        "problema": "bateria quemada",
        "telefono": "8747152833",
        "email": "ricardo@hotmail.com",
        "estado": "pendiente",
        "created_at": null,
        "updated_at": null
      }
    ]})
  })
})
