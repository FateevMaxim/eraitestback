app.get('/api/api_18', async (req, res) => {
  let sql_text = `SELECT * FROM track_list`
  if (req.query.status == 'Получено в Китае'){
    sql_text = sql_text + ` WHERE track_list.guangzhou BETWEEN '${req.query.start} 00:00:00' AND '${req.query.stop} 23:59:59'`
  }
  if (req.query.status == 'Получено в Алматы'){
    sql_text = sql_text + ` WHERE track_list.almaty BETWEEN '${req.query.start} 00:00:00' AND '${req.query.stop} 23:59:59'`
  }
  if (req.query.status == 'Отправлено в город'){
    if (req.query.operator_name == ''){
      sql_text = sql_text + ` 
        WHERE track_list.gorod_out BETWEEN '${req.query.start} 00:00:00' AND '${req.query.stop} 23:59:59' 
        AND gorod_name = '${req.query.gorod_name}'
      `
    }
    if (req.query.operator_name != ''){
      sql_text = sql_text + ` 
        WHERE track_list.gorod_out BETWEEN '${req.query.start} 00:00:00' AND '${req.query.stop} 23:59:59' 
        AND gorod_name = '${req.query.gorod_name}' AND user = '${req.query.operator_name}'
      `
    }
  }
  if (req.query.status == 'Получено клиентом'){
    if (req.query.punkt_name == ''){
      sql_text = sql_text + ` WHERE track_list.client_out BETWEEN '${req.query.start} 00:00:00' AND '${req.query.stop} 23:59:59'`
    }
    if (req.query.punkt_name != ''){
      sql_text = sql_text + ` 
        WHERE track_list.client_out BETWEEN '${req.query.start} 00:00:00' AND '${req.query.stop} 23:59:59'
        AND out_login = '${req.query.punkt_name}'
      `
    }
  }
  const conn = await mariadb.createConnection(mariadb_login)
  const rows = await conn.query(sql_text)
  conn.end()
  res.send(rows)
})
