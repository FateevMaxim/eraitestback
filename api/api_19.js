app.get('/api/api_19', async (req, res) => {
  let data = []
  const conn = await mariadb.createConnection(mariadb_login)
  const rows_1 = await conn.query(`
    SELECT id, name FROM phoneuser WHERE status = 'Moderator'
  `)
  if (rows_1.length != 0){
    for (let i=0; i < rows_1.length; i++){
      let rows_2 = await conn.query(`
        SELECT COUNT(*) AS count FROM phoneuser
        WHERE (
          YEAR(dostup_date) = YEAR(CURRENT_DATE - INTERVAL ${req.query.val_1} MONTH)
          AND MONTH(dostup_date) = MONTH(CURRENT_DATE - INTERVAL ${req.query.val_1} MONTH)
        )
        AND moderator_name = '${rows_1[i].name}'
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
