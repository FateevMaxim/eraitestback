app.get('/api/api_17', async (req, res) => {
  const conn = await mariadb.createConnection(mariadb_login)
  await conn.query(`UPDATE phoneuser SET whatsapp = 1 WHERE telefon = '${req.query.telefon}'`)
  conn.end()
  res.send()
})
