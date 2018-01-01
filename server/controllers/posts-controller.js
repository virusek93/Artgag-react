var con = require('../db_connect');


module.exports.getPosts = function (req, res) {
  con.query('SELECT * FROM articles LIMIT 10', function (error, results, fields) {
    if (error) {
      res.json({
        status: false,
        message: "There are some errors with the query"
      })
    } else {
      res.json({
        posts: results
      })
    }
  });
};