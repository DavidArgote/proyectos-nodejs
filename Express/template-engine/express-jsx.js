const fs = require('fs')

function getKeysFromOptions(options) {
    const { settings, _locals, ...objectKeys} = options;
    return Object.keys(objectKeys)
}

function getRendererContent(content, options) {
    const keys = getKeysFromOptions(options)
    let contentString = content.toString()
    for (let key of keys) {
        contentString = contentString.replace(
            new RegExp(`\{${key}}`, 'gi'), 
            options[key])
    }
    return contentString;
}

function expressJsx(filepath, options, callback) {
    fs.readFile(filepath, function(err, data) {

        if(err) return callback(err);

        const rendered = getRendererContent(data, options)

        return callback(null, rendered)
    })
}

module.exports = expressJsx