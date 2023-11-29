import { test } from '@japa/runner'

test.group('Dispositivo', () => {
  
  test('obtenerdispositivos', async ({client}) => {
    const response = await client.get('/dispositivos')

    response.assertStatus(200)
    response.assertBodyContains({msg : 'Dispositivos encontrados'})
  })


  test('encontrardispositivoespec', async ({client}) => {
    const response = await client.get('/iddispositivo/1')

    response.assertStatus(200)
    response.assertBodyContains({msg : 'Dispositivo encontrado'})
  })
  
  test('fallardispositivoespec', async ({client}) => {
    const response = await client.get('/iddispositivo/100')

    response.assertStatus(400)
    response.assertBody({msg : 'Dispositivo no encontrado'})
  })

  test('obtenerarreglados', async ({client}) => {
    const response = await client.get('/arreglados')

    response.assertStatus(200)
    response.assertBodyContains({msg : 'Dispositivos arreglados'})
  })

  test('obtenerpendientes', async ({client}) => {
    const response = await client.get('/pendientes')

    response.assertStatus(200)
    response.assertBodyContains({msg : 'Dispositivos pendientes'})
  })
})
