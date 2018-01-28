import riot from 'riot'
import route from 'riot-route'

//third party css
require('./public/bulmaswatch.min.css')
require('spinkit/css/spinkit.css')
require('material-design-icons/iconfont/material-icons.css')

require('./public/page.css')

//tag files
require('./tags')

const mixinObject = {
  async modal (opts) {
    const tag = document.getElementsByTagName('modal')[0]._tag
    await tag.openNew(opts)
  }
}
riot.mixin(mixinObject)

document.addEventListener('DOMContentLoaded', async() => {
  route.base('/')
  riot.mount('app')
  document.querySelector('.load').remove()
})
