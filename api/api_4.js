app.get('/api/api_4', async (req, res) => {
  const conn = await mariadb.createConnection(mariadb_login)
  let rows2 = await conn.query(`SELECT * FROM track_list WHERE track_code = '${req.query.track}'`)
  let rows = await conn.query(`
    SELECT phoneuser.telefon, phoneuser.name, phoneuser.family, phoneuser.gorod, phoneuser.block, client_track_list.detail 
    FROM phoneuser LEFT JOIN client_track_list
    ON phoneuser.telefon = client_track_list.client_id
    WHERE client_track_list.track_code = '${req.query.track}'
  `)
  if (rows2.length == 0){
    rows2 = [{
      client_out: '',
      guangzhou: '',
      almaty: '',
      track_code: req.query.track
    }]
  }
  if (rows.length == 0){
    rows = [{
      telefon: 'Нет данных',
      name: '',
      family: '',
      gorod: ''
    }]
  }
  Array.prototype.push.apply(rows2, rows)
  conn.end()
  res.send(rows2)
})
