const fs = require('fs')
const path = require('path')

const mockBaseURL = '//note-server.hunger-valley.com'  // '//localhost:3000'
const realBaseURL = '//note-server.hunger-valley.com'

exports.config = function ({ isDev = true } = { isDev: true }) {
    let fileTxt = `
        module.exports = {
            baseURL: '${isDev ? mockBaseURL : realBaseURL}'
        }
    `
    fs.writeFileSync(path.join(__dirname, '../src/helpers/configURL.js'), fileTxt)
}