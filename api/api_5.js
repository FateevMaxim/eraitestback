app.get('/api/api_5', async (req, res) => {
  const conn = await mariadb.createConnection(mariadb_login)
  await conn.query(`
    INSERT INTO track_list SET track_code = '${req.query.track}', client_out = current_timestamp(), out_login = '${req.query.out_login}'
    ON DUPLICATE KEY UPDATE track_code = '${req.query.track}', client_out = current_timestamp(), out_login = '${req.query.out_login}'
  `)
  conn.end()
  res.send()
})

app.get('/api/api_5_2', async (req, res) => {
  const conn = await mariadb.createConnection(mariadb_login)
  await conn.query(`
    INSERT INTO track_list SET 
    track_code = '${req.query.track}', gorod_out = current_timestamp(), gorod_name = '${req.query.gorod_name}', user = '${req.query.user}'
    ON DUPLICATE KEY UPDATE 
    track_code = '${req.query.track}', gorod_out = current_timestamp(), gorod_name = '${req.query.gorod_name}', user = '${req.query.user}'
  `)
  conn.end()
  res.send()
})
