app.post('/api/api_3', jsonParser, async function (req, res) { 
  if (req.query.status == 'china_in'){
    const conn = await mariadb.createConnection(mariadb_login)
    for (let data of req.body) {
      let track_slice = data.track.slice(0,30)
      await conn.query(`
        INSERT INTO track_list SET track_code = '${track_slice}', guangzhou = current_timestamp() 
        ON DUPLICATE KEY UPDATE track_code = '${track_slice}', guangzhou = current_timestamp()
      `)
    }
    conn.end()
    res.send()
  }
  if (req.query.status == 'almaty_in'){
    const conn = await mariadb.createConnection(mariadb_login)
    for (let data of req.body) {
      let track_slice = data.track.slice(0,30)
      await conn.query(`
        INSERT INTO track_list SET track_code = '${track_slice}', almaty = current_timestamp() 
        ON DUPLICATE KEY UPDATE track_code = '${track_slice}', almaty = current_timestamp()
      `)
    }
    conn.end()
    res.send()
  }
  if (req.query.status == 'gorod_in'){
    const conn = await mariadb.createConnection(mariadb_login)
    for (let data of req.body) {
      let track_slice = data.track.slice(0,30)
      await conn.query(`
        INSERT INTO track_list SET track_code = '${track_slice}', gorod_in = current_timestamp(), gorod_in_name = '${req.query.gorod_name}'
        ON DUPLICATE KEY UPDATE track_code = '${track_slice}', gorod_in = current_timestamp(), gorod_in_name = '${req.query.gorod_name}'
      `)
    }
    conn.end()
    res.send()
  }
})
