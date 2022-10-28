const config = {
  username: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE,
  host: process.env.MYSQLHOST,
  port: process.env.MYSQLPORT,
  dialect: 'mysql',
};

MYSQLDATABASE=railway
MYSQLHOST=containers-us-west-41.railway.app
MYSQLPASSWORD=nTqiCKYa2kVe3YzhQABZ
MYSQLPORT=7058
MYSQLUSER=root
MYSQL_URL=mysql://${{ MYSQLUSER }}:${{ MYSQLPASSWORD }}@${{ MYSQLHOST }}:${{ MYSQLPORT }}/${{ MYSQLDATABASE }}