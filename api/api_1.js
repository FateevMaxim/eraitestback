app.get('/api/api_1', async (req, res) => {
  let login = req.query.login.replace(/[^a-zа-яё0-9\s]/gi, '')
  let password = req.query.password.replace(/[^a-zа-яё0-9\s]/gi, '')
  const conn = await mariadb.createConnection(mariadb_login)
  const rows = await conn.query(`SELECT * FROM user WHERE login='${login}' AND password='${password}'`)
  conn.end()
  res.send(rows)
})
