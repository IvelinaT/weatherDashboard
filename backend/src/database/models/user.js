const Sequelize = require('sequelize')
const bcrypt = require('bcrypt')
module.exports = (sequelize) => {
  return sequelize.define('user', {
    id: {
      type: Sequelize.INTEGER(),
      primaryKey: true,
      autoIncrement: true
    },
    givenName: { // User's forename
      type: Sequelize.STRING(100),
      allowNull: false
    },
    familyName: { // User's surname
      type: Sequelize.STRING(100),
      allowNull: false
    },
    email: { // User's email
      type: Sequelize.STRING(100),
      isEmail: true,
      unique: true,
      allowNull: false
    },
    password: {
      type: Sequelize.STRING(),
      allowNull: false
    },
    isAdmin: { // is User an admin
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  }, {
    freezeTableName: true,
    hooks: {
      beforeCreate: (user) => {
        user.password = bcrypt.hashSync(user.password, 10)
      },
      beforeValidate: (user) => {
        user.email = user.email.toLowerCase()
      }
    }
  })
}
