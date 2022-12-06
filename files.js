// Read file
// const fs = require("fs");
// fs.readFile("./Docs/text.txt", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data.toString());
// });
// console.log("Last Line");

//Write files

const fs = require("fs");
if (!fs.existsSync("./assets")) {
  fs.mkdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("folder created");
  });
} else {
  fs.rmdir("./assets", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Folder Deleted");
    }
  });
}
