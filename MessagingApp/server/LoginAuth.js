const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/whatsapplite', { useNewUrlParser: true });
const conn = mongoose.connection;
const Schema = mongoose.Schema;

const schema = new Schema({
  name: String
});

const Test = mongoose.model('test', schema);

const test = new Test({ name: 'one' });

async function run() {
  console.log(`Mongoose: ${mongoose.version}`);
  await conn.dropDatabase();
  await test.save();
  let found = await Test.findOne();
  console.log(found);
  return conn.close();
}

run();