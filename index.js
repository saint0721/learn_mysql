const mysql = require('mysql')
// sql 불러오기
const sql = require('./sql.js')

const pool = mysql.createPool({ // Pool 생성
  connectionLimit : process.env.MYSQL_LIMIT,
  host  : process.env.MYSQL_HOST,
  port : process.env.MYSQL_PORT,
  user : process.env.MYSQL_USERNAME,
  password : process.env.MYSQL_PASSWORD,
  database : process.env.MYSQL_DB
})

// 쿼리문 실행&return 함수
const query = async(alias, values) => {
  return new Promise((resolve, reject) => pool.query(sql[alias], values, (error, results)=> {
    if(error) {
      console.log(error)
      reject({
        error
      });
    } else resolve(results)
  }))
}

module.exports = {
  query
}