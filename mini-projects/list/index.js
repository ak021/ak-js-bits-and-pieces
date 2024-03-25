const fs = require("fs");

fs.readdir(process.cwd(), (err, filesNames) => {
  if (err) {
    console.log("failed to read file");
    console.error(err);
  }

  console.log({ filesNames });
});
