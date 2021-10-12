const pkgC = require("@multi-app-monorepo/pkg-c");
const { name } = require("../package.json");

console.log(`${name}:
  ${pkgC}
`);
