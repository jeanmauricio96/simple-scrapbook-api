const express = require("Express");
const app = express();

const port = 3333;

app.listen(3333, () => {
  console.log(`Server up and running on PORT ${port}`);
});
