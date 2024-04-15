app.get('/api/api_2', async (req, res) => {
  if (req.query.status == 'china_in'){
    const conn = await mariadb.createConnection(mariadb_login)
    const rows = await conn.query(`
      SELECT COUNT(*) AS count FROM track_list 
      WHERE guangzhou >= CURDATE() AND guangzhou < (CURDATE() + INTERVAL 1 DAY)
    `)
    conn.end()
    res.send({count:rows[0].count.toString()})
  }
  if (req.query.status == 'almaty_in'){
    const conn = await mariadb.createConnection(mariadb_login)
    const rows = await conn.query(`
      SELECT COUNT(*) AS count FROM track_list 
      WHERE almaty >= CURDATE() AND almaty < (CURDATE() + INTERVAL 1 DAY)
    `)
    conn.end()
    res.send({count:rows[0].count.toString()})
  }
  if (req.query.status == 'out'){
    const conn = await mariadb.createConnection(mariadb_login)
    const rows = await conn.query(`
      SELECT COUNT(*) AS count FROM track_list 
      WHERE (client_out >= CURDATE() AND client_out < (CURDATE() + INTERVAL 1 DAY)) AND out_login = '${req.query.out_login}'
    `)
    conn.end()
    res.send({count:rows[0].count.toString()})
  }
  if (req.query.status == 'operator'){
    const conn = await mariadb.createConnection(mariadb_login)
    const rows = await conn.query(`
      SELECT COUNT(*) AS count FROM track_list 
      WHERE (gorod_out >= CURDATE() AND gorod_out < (CURDATE() + INTERVAL 1 DAY)) AND user = '${req.query.user}'
    `)
    conn.end()
    res.send({count:rows[0].count.toString()})
  }
  if (req.query.status == 'gorod_in'){
    const conn = await mariadb.createConnection(mariadb_login)
    const rows = await conn.query(`
      SELECT COUNT(*) AS count FROM track_list 
      WHERE (gorod_in >= CURDATE() AND gorod_in < (CURDATE() + INTERVAL 1 DAY)) AND gorod_in_name = '${req.query.gorod_name}'
    `)
    conn.end()
    res.send({count:rows[0].count.toString()})
  }
})
