const _ = require('lodash')
const mysql = require('mysql')
const Promise = require('bluebird')

let connection = null

const MYSQL_HOST = process.env.MYSQL_HOST
const MYSQL_USER = process.env.MYSQL_USER
const MYSQL_DATABASE = process.env.MYSQL_DATABASE
const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD

const MAPPINGS_TABLE_INIT = `create table if not exists mappings (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  board_id          VARCHAR(255)  NOT NULL,
  board_list_id     VARCHAR(255)  default null,
  pipeline_id       VARCHAR(255)  NOT NULL,
  pipeline_stage_id VARCHAR(255)  default null,
  created_at        datetime      default CURRENT_TIMESTAMP,
  UNIQUE KEY board_id_pipeline_id_board_list_id (board_id, pipeline_id, board_list_id),
  UNIQUE KEY board_id_pipeline_id_pipeline_stage_id (board_id, pipeline_id, pipeline_stage_id)
);`

exports.init = async () => {
    try {
        connection = new mysql.createConnection({
            host: MYSQL_HOST,
            user: MYSQL_USER,
            password: MYSQL_PASSWORD,
            database: MYSQL_DATABASE,
        })

        connection.connectAsync = Promise.promisify(connection.connect)
        connection.queryAsync = Promise.promisify(connection.query)

        console.log('connecting to MYSQL DB')
        await connection.connectAsync()

        console.log('init tables')
        await connection.queryAsync(MAPPINGS_TABLE_INIT)
    } catch (e) {
        console.error('DB is not available')
        console.error(e)
    }
}

exports.close = () => {
    if (connection) connection.end()
}

exports.run = (sql) => {
    console.log(sql)
    return _.isNull(connection) ? Promise.reject(new Error('MYSQL DB not initialized!')) : connection.queryAsync(sql)
}
