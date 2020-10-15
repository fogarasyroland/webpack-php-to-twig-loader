const spawnSync = require('child_process').spawnSync
const path = require('path')

module.exports = function(content) {
  const twig = spawnSync(path.resolve(__dirname , './phptotwig.php'), [], { input : content }).stdout.toString()
  return twig
}
