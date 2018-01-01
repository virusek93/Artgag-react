var con = require('../db_connect');

module.exports.login = function (req, res) {
  var login = req.body.login;
  var password = req.body.password;

  con.query('SELECT * FROM users WHERE userName =?', [ login ], function (error, results, fields) {
    if (error) {
      res.json({
        status: false,
        message: "There are some errors with query",
        error,
      })
    } else {
      if (results.length > 0) {
        if (password == results[ 0 ].userPass) {
          res.json({
            status: true,
            message: 'Logged'
          })
        } else {
          res.json({
            status: false,
            message: "Password and login dose not match",
            result: results,
          });
        }
      } else {
        res.json({
          status: false,
          result: login,
          message: "User does not exist"
        })
      }
    }
  });
};