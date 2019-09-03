const mongo = require("./connection")

var models = {
  Article: require("./models/articles")
}

module.exports = models
