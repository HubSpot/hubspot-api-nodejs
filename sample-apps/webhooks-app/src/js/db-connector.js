const _ = require('lodash')
const mysql = require('mysql')
const Promise = require('bluebird')

let connection = null

const MYSQL_HOST = process.env.MYSQL_HOST
const MYSQL_USER = process.env.MYSQL_USER
const MYSQL_DATABASE = process.env.MYSQL_DATABASE
const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD

const EVENTS_TABLE_INIT = `create table if not exists events (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  event_type      VARCHAR(255)  default "N/A",
  property_name   VARCHAR(255)  default null,
  property_value  VARCHAR(255)  default null,
  object_id       bigint        default null,
  event_id        bigint        default null,
  occurred_at     bigint        default null,
  shown           tinyint(1)    default 0,
  created_at      datetime      default CURRENT_TIMESTAMP
);`

const TOKENS_TABLE_INIT = `create table if not exists tokens  (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  refresh_token  VARCHAR(255)   default null,
  access_token   VARCHAR(255)   default null,
  expires_in     bigint         default null,
  created_at     datetime       default CURRENT_TIMESTAMP,
  updated_at     datetime       default CURRENT_TIMESTAMP
);`

const URLS_TABLE_INIT = `create table if not exists urls  (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  url                    VARCHAR(255)   default null,
  webhooks_initialized   boolean        default 0
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

        console.log('connecting to DB')
        await connection.connectAsync()

        console.log('init tables')
        await connection.queryAsync(EVENTS_TABLE_INIT)
        await connection.queryAsync(TOKENS_TABLE_INIT)
        await connection.queryAsync(URLS_TABLE_INIT)
    } catch (e) {
        console.error('DB is not available')
        console.error(e)
    }
}

exports.close = async () => {
    if (connection) connection.end()
}

exports.run = (sql) => {
    console.log(sql)
    return _.isNull(connection) ? Promise.reject(new Error('DB not initialized!')) : connection.queryAsync(sql)
}
