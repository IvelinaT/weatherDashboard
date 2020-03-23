'use strict'
const bcrypt = require('bcrypt')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('user', [{
      givenName: 'John',
      familyName: 'Doe',
      email: 'example4@example.com',
      password: bcrypt.hashSync('123456', 10),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      givenName: 'Admin',
      familyName: 'Admin',
      email: 'admin4@example.com',
      password: bcrypt.hashSync('admin', 10),
      isAdmin: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('user', null, {})
  }
}
