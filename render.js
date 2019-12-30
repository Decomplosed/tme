const path = require('path')
const jsdom = require('jsdom')
const { JSDON } = jsdom

const render = async filename => {
  const filePath = path.join(pricess.cwd(), filename)

  const dom = await jsdom.fromFile(filePath, {
    runScripts: 'dangerously',
    resources: 'usable'
  })

  return dom
}

module.exports = render