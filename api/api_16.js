app.get('/api/api_16', async (req, res) => {
  const conn = await mariadb.createConnection(mariadb_login)
  let today_login = await conn.query(`SELECT COUNT(*) AS count FROM phoneuser WHERE login_date = CURDATE() AND status = 'Client'`)
  let today_track = await conn.query(`SELECT COUNT(*) AS count FROM client_track_list WHERE datecreate >= CURDATE() AND datecreate < (CURDATE() + INTERVAL 1 DAY)`)
  let month_track = await conn.query(`
    SELECT COUNT(*) AS count FROM client_track_list
    WHERE YEAR(datecreate) = YEAR(CURRENT_DATE - INTERVAL 0 MONTH) AND MONTH(datecreate) = MONTH(CURRENT_DATE - INTERVAL 0 MONTH)
  `)
  let data = {
    today_login : today_login[0].count.toString(),
    today_track : today_track[0].count.toString(),
    month_track : month_track[0].count.toString(),
  }
  conn.end()
  res.send(data)
})

app.get('/api/api_16_2', async (req, res) => {
  const conn = await mariadb.createConnection(mariadb_login)
  let rows_1 = await conn.query(`SELECT user FROM user WHERE status = 'operator'`)
  let data = []
  if (rows_1.length != 0){
    for (let i=0; i < rows_1.length; i++){
      let rows_2 = await conn.query(`
        SELECT COUNT(*) AS count FROM track_list 
        WHERE (YEAR(gorod_out) = YEAR(CURRENT_DATE - INTERVAL 0 MONTH) AND MONTH(gorod_out) = MONTH(CURRENT_DATE - INTERVAL 0 MONTH))
        AND user = '${rows_1[i].user}'
      `)
      let json_let = {
        user: rows_1[i].user,
        count: rows_2[0].count.toString()
      }
      data.push(json_let)
    }
  }
  conn.end()
  res.send(data)
})

app.get('/api/api_16_3', async (req, res) => {
  const conn = await mariadb.createConnection(mariadb_login)
  let rows_1 = await conn.query(`SELECT name FROM user WHERE status = 'out'`)
  let data = []
  if (rows_1.length != 0){
    for (let i=0; i < rows_1.length; i++){
      let rows_2 = await conn.query(`
        SELECT COUNT(*) AS count FROM track_list 
        WHERE (YEAR(client_out) = YEAR(CURRENT_DATE - INTERVAL 0 MONTH) AND MONTH(client_out) = MONTH(CURRENT_DATE - INTERVAL 0 MONTH))
        AND out_login = '${rows_1[i].name}'
      `)
      let json_let = {
        name: rows_1[i].name,
        count: rows_2[0].count.toString()
      }
      data.push(json_let)
    }
  }
  conn.end()
  res.send(data)
})
