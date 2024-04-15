app.get('/api/api_7', async (req, res) => {
  const conn = await mariadb.createConnection(mariadb_login)
  const rows = await conn.query(`SELECT * FROM phoneuser WHERE telefon = '${req.query.login}'`)
  if (rows.length == 0) {
    await conn.query(`
      INSERT INTO phoneuser (telefon, password, name, family, gorod)
      VALUES ('${req.query.login}','${req.query.password}','${req.query.name}','${req.query.family}','${req.query.gorod}')
    `)
    conn.end()
    res.send([{st: 'Пользователь успешно добавлен'}])
  }else{
    conn.end()
    res.send([{st: 'Пользователь с таким номером существует'}])
  }
})
