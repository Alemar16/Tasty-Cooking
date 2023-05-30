const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const { diet } = require("./src/controllers/RecetasApi");
const { getApiInfo } = require("./src/controllers/ControllerRecipe");
// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, process.env.PORT, async () => {
    console.log("%s listening at 3001");

    // Start the diet
    await diet();

    // Get the information from the API
    await getApiInfo({});
  });
});
