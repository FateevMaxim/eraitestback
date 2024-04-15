app.get('/api/api_12', async (req, res) => {
  if (req.query.status == 'insert'){
    const conn = await mariadb.createConnection(mariadb_login)
    await conn.query(`
      INSERT INTO client_track_list (client_id,track_code,detail)
      VALUES ('${req.query.telefon}','${req.query.track}','${req.query.text}')
    `)
    conn.end()
    res.send()
  }
  if (req.query.status == 'delete'){
    const conn = await mariadb.createConnection(mariadb_login)
    await conn.query(`DELETE FROM client_track_list WHERE id = '${req.query.id}'`)
    conn.end()
    res.send()
  }
  if (req.query.status == 'archive_in'){
    const conn = await mariadb.createConnection(mariadb_login)
    await conn.query(`UPDATE client_track_list SET status = 'archive' WHERE id = '${req.query.id}'`)
    conn.end()
    res.send()
  }
  if (req.query.status == 'archive_out'){
    const conn = await mariadb.createConnection(mariadb_login)
    await conn.query(`UPDATE client_track_list SET status = NULL WHERE id = '${req.query.id}'`)
    conn.end()
    res.send()
  }
})
