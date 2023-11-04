// jest.setup.js
const { MongoMemoryServer } = require('mongodb-memory-server');
const mongod = new MongoMemoryServer();

module.exports = async () => {
  const uri = await mongod.getUri();
  process.env.MONGOURL = uri;
};
