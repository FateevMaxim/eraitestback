app.get('/api/api_9', async (req, res) => {
  const conn = await mariadb.createConnection(mariadb_login)
  let rows = []
  if (req.query.status == 'archive'){
    rows = await conn.query(`SELECT * FROM client_track_list WHERE client_id = '${req.query.telefon}' AND status = 'archive' ORDER BY id DESC`)
  }else{
    rows = await conn.query(`SELECT * FROM client_track_list WHERE client_id = '${req.query.telefon}' AND status IS NULL ORDER BY id DESC`)
  }
  
  if (rows.length != 0){
    for (let i=0; i < rows.length; i++){
      const rows2 = await conn.query(`SELECT * FROM track_list WHERE track_code = '${rows[i].track_code}'`)
      if (rows2.length != 0){
        if (rows2[0].guangzhou != null)
        rows[i].back_color = 'rgb(255, 198, 53)'
        rows[i].guangzhou = rows2[0].guangzhou
        if (rows2[0].almaty != null)
        rows[i].back_color = 'rgb(0, 218, 76)'
        rows[i].almaty = rows2[0].almaty
        if (rows2[0].gorod_out != null)
        rows[i].back_color = 'rgb(230, 123, 253)'
        rows[i].gorod_out = rows2[0].gorod_out
        rows[i].gorod_name = rows2[0].gorod_name
        if (rows2[0].gorod_in != null)
        rows[i].back_color = 'rgb(253, 123, 123)'
        rows[i].gorod_in = rows2[0].gorod_in
        rows[i].gorod_in_name = rows2[0].gorod_in_name
        if (rows2[0].client_out != null)
        rows[i].back_color = 'rgb(53, 174, 255)'
        rows[i].client_out = rows2[0].client_out
      }else{
        rows[i].back_color = 'rgb(168, 168, 168)'
        rows[i].guangzhou = null
        rows[i].almaty = null
        rows[i].gorod_out = null
        rows[i].client_out = null
        rows[i].gorod_in = null
      }
    }
    conn.end()
    res.send(rows)
  }else{
    conn.end()
    res.send(rows)
  }
})
