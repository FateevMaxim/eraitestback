app.get('/api/api_14', async (req, res) => {
  const conn = await mariadb.createConnection(mariadb_login)
  let countClient = await conn.query(`SELECT COUNT(*) AS count FROM phoneuser WHERE datecreate >= CURDATE() AND datecreate < (CURDATE() + INTERVAL 1 DAY)`)
  let countClientAll = await conn.query(`SELECT COUNT(*) AS count FROM phoneuser WHERE status = 'Client'`)
  let countYes = await conn.query(`SELECT COUNT(*) AS count FROM phoneuser WHERE moderator = true AND status = 'Client'`)
  let countNo = await conn.query(`SELECT COUNT(*) AS count FROM phoneuser WHERE moderator = false AND status = 'Client'`)
  let data = [{
    countClient: `${countClient[0].count}`,
    countClientAll : `${countClientAll[0].count}`,
    countYes : `${countYes[0].count}`,
    countNo : `${countNo[0].count}`,
  }]
  conn.end()
  res.send(data)
})
