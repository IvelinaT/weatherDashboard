
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('user', {
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
        defaultValue: false
      },
      createdAt: {
        type: Sequelize.DATE(),
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        type: Sequelize.DATE(),
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
      },
      deletedAt: {
        type: Sequelize.DATE(),
        allowNull: true,
        defaultValue: null
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('user')
  }
}
