require('dotenv').config();
require('./lib/client').connect();

const app = require('./lib/app');

const PORT = process.env.PORT || 4321;

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Started on ${PORT}`);
});
