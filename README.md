# weatherDashboard

## Getting Started

Installing dependencies:

```
nvm use && npm i
```
_Note: you will need to do this in both frontend and backend folders

Starting the services:
frontend:
```
npm start
```

The service should be up and running on port 3000.

backend:
```
NODE_ENV=development npm start
```

The service should be up and running on port 3100.

## Running the backend tests
Navigate to project's backend folder
### Run all unit and system tests

```
npm test
```

### Run all unit tests

```
npm run test:coverage
## Updates to the Database

The project uses Sequalize Database [Migrations](https://sequelize.org/master/manual/migrations.html)

To create a new migration you can run `npx sequelize-cli migration:generate --name MY-MIGRATION` replacing `MY-MIGRATION` with the actual migration name.

To bring your local database up to date with all pending migrations you can run  `npx sequelize-cli db:migrate --env development`.

To apply a migration to the production you can run `npx sequelize-cli db:migrate --env <env>` where `<env>` is the needed environment

To rollback a migration you'll need to run `npx sequelize-cli db:migrate:undo --name MY-MIGRATION` replacing `MY-MIGRATION` for the full file name of the migration ie `20190909125448-XXX-XXX`
 
