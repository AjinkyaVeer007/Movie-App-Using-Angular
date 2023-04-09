const app = require("./app");

const { PORT } = process.env;

app.listen(PORT, () => {
  console.log(`Port is running ar ${PORT}`);
});
