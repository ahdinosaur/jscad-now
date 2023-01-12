const budo = require('budo')
const browserifyCss = require('browserify-css')
const browserifyTs = require('tsify')

module.exports = function (opts) {
    const { filename, cleanup } = opts
    return budo(filename,
        {
            live: true,
            open: true,
            port: 8099,
            stream: process.stdout,
            browserify: {
                plugin: b => b
                  .plugin(browserifyTs, {})
                  .transform(browserifyCss, { autoInject: false, global: true })
            }
        }
    ).on('exit', cleanup)
}
