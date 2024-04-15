app.get('/api/api_15', async (req, res) => {
  let global_val_1 = 'text'
  function abc(num){
    if (num == 1) global_val_1 = 'Январь'
    if (num == 2) global_val_1 = 'Февраль'
    if (num == 3) global_val_1 = 'Март'
    if (num == 4) global_val_1 = 'Апрель'
    if (num == 5) global_val_1 = 'Май'
    if (num == 6) global_val_1 = 'Июнь'
    if (num == 7) global_val_1 = 'Июль'
    if (num == 8) global_val_1 = 'Август'
    if (num == 9) global_val_1 = 'Сентябрь'
    if (num == 10) global_val_1 = 'Октябрь'
    if (num == 11) global_val_1 = 'Ноябрь'
    if (num == 12) global_val_1 = 'Декабрь'
  }

  const conn = await mariadb.createConnection(mariadb_login)
  const china_month_5 = await conn.query(`SELECT COUNT(*) AS count FROM track_list WHERE YEAR(guangzhou) = YEAR(CURRENT_DATE - INTERVAL 4 MONTH) AND MONTH(guangzhou) = MONTH(CURRENT_DATE - INTERVAL 4 MONTH)`)
  const china_month_4 = await conn.query(`SELECT COUNT(*) AS count FROM track_list WHERE YEAR(guangzhou) = YEAR(CURRENT_DATE - INTERVAL 3 MONTH) AND MONTH(guangzhou) = MONTH(CURRENT_DATE - INTERVAL 3 MONTH)`)
  const china_month_3 = await conn.query(`SELECT COUNT(*) AS count FROM track_list WHERE YEAR(guangzhou) = YEAR(CURRENT_DATE - INTERVAL 2 MONTH) AND MONTH(guangzhou) = MONTH(CURRENT_DATE - INTERVAL 2 MONTH)`)
  const china_month_2 = await conn.query(`SELECT COUNT(*) AS count FROM track_list WHERE YEAR(guangzhou) = YEAR(CURRENT_DATE - INTERVAL 1 MONTH) AND MONTH(guangzhou) = MONTH(CURRENT_DATE - INTERVAL 1 MONTH)`)
  const china_month_1 = await conn.query(`SELECT COUNT(*) AS count FROM track_list WHERE YEAR(guangzhou) = YEAR(CURRENT_DATE - INTERVAL 0 MONTH) AND MONTH(guangzhou) = MONTH(CURRENT_DATE - INTERVAL 0 MONTH)`)
  const almaty_month_5 = await conn.query(`SELECT COUNT(*) AS count FROM track_list WHERE YEAR(almaty) = YEAR(CURRENT_DATE - INTERVAL 4 MONTH) AND MONTH(almaty) = MONTH(CURRENT_DATE - INTERVAL 4 MONTH)`)
  const almaty_month_4 = await conn.query(`SELECT COUNT(*) AS count FROM track_list WHERE YEAR(almaty) = YEAR(CURRENT_DATE - INTERVAL 3 MONTH) AND MONTH(almaty) = MONTH(CURRENT_DATE - INTERVAL 3 MONTH)`)
  const almaty_month_3 = await conn.query(`SELECT COUNT(*) AS count FROM track_list WHERE YEAR(almaty) = YEAR(CURRENT_DATE - INTERVAL 2 MONTH) AND MONTH(almaty) = MONTH(CURRENT_DATE - INTERVAL 2 MONTH)`)
  const almaty_month_2 = await conn.query(`SELECT COUNT(*) AS count FROM track_list WHERE YEAR(almaty) = YEAR(CURRENT_DATE - INTERVAL 1 MONTH) AND MONTH(almaty) = MONTH(CURRENT_DATE - INTERVAL 1 MONTH)`)
  const almaty_month_1 = await conn.query(`SELECT COUNT(*) AS count FROM track_list WHERE YEAR(almaty) = YEAR(CURRENT_DATE - INTERVAL 0 MONTH) AND MONTH(almaty) = MONTH(CURRENT_DATE - INTERVAL 0 MONTH)`)
  const out_month_5 = await conn.query(`SELECT COUNT(*) AS count FROM track_list WHERE YEAR(client_out) = YEAR(CURRENT_DATE - INTERVAL 4 MONTH) AND MONTH(client_out) = MONTH(CURRENT_DATE - INTERVAL 4 MONTH)`)
  const out_month_4 = await conn.query(`SELECT COUNT(*) AS count FROM track_list WHERE YEAR(client_out) = YEAR(CURRENT_DATE - INTERVAL 3 MONTH) AND MONTH(client_out) = MONTH(CURRENT_DATE - INTERVAL 3 MONTH)`)
  const out_month_3 = await conn.query(`SELECT COUNT(*) AS count FROM track_list WHERE YEAR(client_out) = YEAR(CURRENT_DATE - INTERVAL 2 MONTH) AND MONTH(client_out) = MONTH(CURRENT_DATE - INTERVAL 2 MONTH)`)
  const out_month_2 = await conn.query(`SELECT COUNT(*) AS count FROM track_list WHERE YEAR(client_out) = YEAR(CURRENT_DATE - INTERVAL 1 MONTH) AND MONTH(client_out) = MONTH(CURRENT_DATE - INTERVAL 1 MONTH)`)
  const out_month_1 = await conn.query(`SELECT COUNT(*) AS count FROM track_list WHERE YEAR(client_out) = YEAR(CURRENT_DATE - INTERVAL 0 MONTH) AND MONTH(client_out) = MONTH(CURRENT_DATE - INTERVAL 0 MONTH)`)
  const text_month_1 = await conn.query(`SELECT MONTH(CURRENT_DATE - INTERVAL 0 MONTH) AS count`)
  abc(text_month_1[0].count)
  let m_text1 = global_val_1
  const text_month_2 = await conn.query(`SELECT MONTH(CURRENT_DATE - INTERVAL 1 MONTH) AS count`)
  abc(text_month_2[0].count)
  let m_text2 = global_val_1
  const text_month_3 = await conn.query(`SELECT MONTH(CURRENT_DATE - INTERVAL 2 MONTH) AS count`)
  abc(text_month_3[0].count)
  let m_text3 = global_val_1
  const text_month_4 = await conn.query(`SELECT MONTH(CURRENT_DATE - INTERVAL 3 MONTH) AS count`)
  abc(text_month_4[0].count)
  let m_text4 = global_val_1
  const text_month_5 = await conn.query(`SELECT MONTH(CURRENT_DATE - INTERVAL 4 MONTH) AS count`)
  abc(text_month_5[0].count)
  let m_text5 = global_val_1
  let data = [{
    china_month_5: `${china_month_5[0].count}`,
    china_month_4: `${china_month_4[0].count}`,
    china_month_3: `${china_month_3[0].count}`,
    china_month_2: `${china_month_2[0].count}`,
    china_month_1: `${china_month_1[0].count}`,
    almaty_month_5: `${almaty_month_5[0].count}`,
    almaty_month_4: `${almaty_month_4[0].count}`,
    almaty_month_3: `${almaty_month_3[0].count}`,
    almaty_month_2: `${almaty_month_2[0].count}`,
    almaty_month_1: `${almaty_month_1[0].count}`,
    out_month_5: `${out_month_5[0].count}`,
    out_month_4: `${out_month_4[0].count}`,
    out_month_3: `${out_month_3[0].count}`,
    out_month_2: `${out_month_2[0].count}`,
    out_month_1: `${out_month_1[0].count}`,
    text_month_1: `${m_text1}`,
    text_month_2: `${m_text2}`,
    text_month_3: `${m_text3}`,
    text_month_4: `${m_text4}`,
    text_month_5: `${m_text5}`,
  }]
  conn.end()
  res.send(data)
})
