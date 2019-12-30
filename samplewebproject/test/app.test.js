const assert = require('assert')

it('has a text input', async () => {
  const dom = await render('index.html')
  const input = dom.window.document.querySelector('input')

  assert(input)
})

it('show a success message with a valid email', async () => {
  const dom = await render('index.html')

  const input = dom.window.document.querySelector('input')
  input.value = 'fsdfds@fssadf.com'

})