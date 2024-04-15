app.get('/api/api_10', async (req, res) => {
  if (req.query.status == 'all'){
    const conn = await mariadb.createConnection(mariadb_login)
    const rows = await conn.query(`SELECT * FROM phoneuser WHERE moderator = '0' AND status = 'Client' ORDER BY id DESC`)
    conn.end()
    res.send(rows)
  }
  if (req.query.status == 'telefon'){
    const conn = await mariadb.createConnection(mariadb_login)
    const rows = await conn.query(`SELECT * FROM phoneuser WHERE telefon LIKE '%${req.query.telefon}%' AND status = 'Client'`)
    conn.end()
    res.send(rows)
  }
})
