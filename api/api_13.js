app.get('/api/api_13', async (req, res) => {
  const conn = await mariadb.createConnection(mariadb_login)
  let dataSend = []
  let j = 1
  for (let i=0; i<10; i++){
    const countChina = await conn.query(`SELECT COUNT(*) AS count FROM track_list WHERE guangzhou >= (CURDATE() - INTERVAL ${i} DAY) AND guangzhou < (CURDATE() + INTERVAL ${j} DAY)`)
    const countAlmaty = await conn.query(`SELECT COUNT(*) AS count FROM track_list WHERE almaty >= (CURDATE() - INTERVAL ${i} DAY) AND almaty < (CURDATE() + INTERVAL ${j} DAY)`)
    const countOut = await conn.query(`SELECT COUNT(*) AS count FROM track_list WHERE client_out >= (CURDATE() - INTERVAL ${i} DAY) AND client_out < (CURDATE() + INTERVAL ${j} DAY)`)
    const today = await conn.query(`SELECT CURDATE() - INTERVAL ${i} DAY AS count`)
    const d = new Date(today[0].count).toLocaleString('ru-Ru',{month: "short", day: "numeric"})
    const d2 = new Date(today[0].count).toLocaleString('ru-Ru',{weekday: "long"})
    let selectData = {
      text: `${d} \n ${d2}`,
      summ_china: `${countChina[0].count}`,
      china_text: `${countChina[0].count.toLocaleString('en-US')}`,
      summ_almaty: `${countAlmaty[0].count}`,
      almty_text: `${countAlmaty[0].count.toLocaleString('en-US')}`,
      summ_out: `${countOut[0].count}`,
      out_text: `${countOut[0].count.toLocaleString('en-US')}`,
    }
    dataSend.push(selectData)
    j = j - 1
  }
  conn.end()
  res.send(dataSend)
})
