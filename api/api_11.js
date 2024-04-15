app.get('/api/api_11', async (req, res) => {
  if (req.query.status == 'on'){
    const conn = await mariadb.createConnection(mariadb_login)
    await conn.query(`
      UPDATE phoneuser SET moderator = 1, dostup_date = current_timestamp(), moderator_name = '${req.query.moderator}'
      WHERE id = '${req.query.id}'
    `)
    conn.end()
    res.send()
  }
  if (req.query.status == 'off'){
    const conn = await mariadb.createConnection(mariadb_login)
    await conn.query(`UPDATE phoneuser SET moderator = 0 WHERE id = '${req.query.id}'`)
    conn.end()
    res.send()
  }
  if (req.query.status == 'delete'){
    const conn = await mariadb.createConnection(mariadb_login)
    await conn.query(`DELETE FROM phoneuser WHERE id = '${req.query.id}'`)
    conn.end()
    res.send()
  }
  if (req.query.status == 'block'){
    const conn = await mariadb.createConnection(mariadb_login)
    await conn.query(`UPDATE phoneuser SET block = 1 WHERE id = '${req.query.id}'`)
    conn.end()
    res.send()
  }
})
