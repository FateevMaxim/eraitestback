app.get('/api/api_8', async (req, res) => {
  if (req.query.status == 'select'){
    const conn = await mariadb.createConnection(mariadb_login)
    const rows = await conn.query(`SELECT * FROM messageinfo`)
    conn.end()
    res.send(rows)
  }
  if (req.query.status == 'insert'){
    const conn = await mariadb.createConnection(mariadb_login)
    await conn.query(`INSERT INTO messageinfo (message) VALUES ('${req.query.text}')`)
    conn.end()
    res.send()
  }
  if (req.query.status == 'delete'){
    const conn = await mariadb.createConnection(mariadb_login)
    await conn.query(`DELETE FROM messageinfo WHERE id = '${req.query.id}'`)
    conn.end()
    res.send()
  }
})
