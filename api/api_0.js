app.get('/api/api_0', async (req, res) => {
  const conn = await mariadb.createConnection(mariadb_login)
  const rows = await conn.query(`SELECT * FROM config LIMIT 1`)
  conn.end()
  res.send(rows)
})

app.get('/api/api_0_2', async (req, res) => {
  const conn = await mariadb.createConnection(mariadb_login)
  const rows = await conn.query(`SELECT * FROM gorod_list`)
  conn.end()
  res.send(rows)
})

app.get('/api/api_0_3', async (req, res) => {
  const conn = await mariadb.createConnection(mariadb_login)
  const rows = await conn.query(`SELECT user FROM user WHERE status = 'operator'`)
  conn.end()
  res.send(rows)
})

app.get('/api/api_0_4', async (req, res) => {
  const conn = await mariadb.createConnection(mariadb_login)
  const rows = await conn.query(`SELECT name FROM user WHERE status = 'out'`)
  conn.end()
  res.send(rows)
})

app.get('/api/api_0_5', async (req, res) => {
  const conn = await mariadb.createConnection(mariadb_login)
  const rows = await conn.query(`SELECT * FROM scaner`)
  conn.end()
  res.send(rows)
})
