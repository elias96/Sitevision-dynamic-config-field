(() => {
  const router = require("router");
  const appData = require("appData");

  router.get("/", (req, res) => {
    const fields = [];
    let continueLoop = true;

    while(continueLoop) {
      const potentialField = `pages-${fields.length + 1}`;
      if(!appData.get(potentialField)) {
        continueLoop = false;
        break;
      }

      fields.push("wow");
    }

    res.render({
      fields
    });
  });
})();
