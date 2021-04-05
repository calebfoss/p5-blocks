const { modules, classitems } = require("./p5DocData.json");
const fs = require("fs");

const output = { modules: {} };
classitems
  .filter(
    (item) =>
      item.module &&
      item.itemtype === "method" &&
      item.class === "p5" &&
      item.access !== "private"
  )
  .forEach((item) => {
    if (!output.modules[item.module])
      output.modules[item.module] = { methods: {} };
    if (!output.modules[item.module].methods[item.name])
      output.modules[item.module].methods[item.name] = {
        description: item.description,
        overloads: [],
      };
    output.modules[item.module].methods[item.name].overloads.push(item.params);
  });
fs.writeFileSync("p5methods.json", JSON.stringify(output, null, 2));
