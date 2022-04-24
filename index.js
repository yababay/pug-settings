const fs = require('fs')

const settings = require('./src/settings.json')
buff = []
for (const [key, value] of Object.entries(settings)) {
    buff.push(`- var ${key} = ${JSON.stringify(value)}`);
  }

fs.writeFileSync('./src/pug_modules/settings.pug', buff.join('\n') + '\n')
