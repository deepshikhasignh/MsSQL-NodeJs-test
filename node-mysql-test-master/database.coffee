mysql = require 'mysql'
ini = require 'node-ini'
util = require 'util'
# Configuration file
inipath = './config.ini'
cfg = ini.parseSync inipath

# Database connection
db = cfg.database
dbname = 'TestNode'

connection = mysql.createConnection
	host: '192.168.200.81'
	user: 'test'
	password: 'test'
	database: 'TestNode'

connection.connect()

module.exports = connection