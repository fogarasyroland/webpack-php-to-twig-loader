const spawnSync = require('child_process').spawn
const path = require('path')

module.exports = function(content, map, meta) {
  this.cacheable();
  var callback = this.async();
  const twig = spawnSync(path.resolve(__dirname , './phptotwig.php'), [])
  twig.stdin.write(content);
  twig.stdin.end();
  twig.stdout.on('data', (data) => {
    callback(null, "module.exports = " + JSON.stringify(data.toString()), map, meta)
    // callback(null, data, map, meta)
  });
  twig.stderr.on('data', (data) => {
    console.error(data.toString());

    callback(null, data, map, meta)
  });
  twig.on('close', (code) => {

  });
}

module.exports.seperable = true;
