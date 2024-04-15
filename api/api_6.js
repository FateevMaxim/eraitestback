app.get('/api/api_6', async (req, res) => {
  const conn = await mariadb.createConnection(mariadb_login)
  const rows = await conn.query(`SELECT * FROM phoneuser WHERE telefon='${req.query.login}' AND password='${req.query.password}'`)
  if (rows.length != 0){
    await conn.query(`UPDATE phoneuser SET login_date = CURDATE() WHERE id ='${rows[0].id}'`)
  }
  conn.end()
  res.send(rows)
})
