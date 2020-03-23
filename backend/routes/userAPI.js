const Router = require('koa-router')

const router = new Router()
const controllers = require('../src/controllers')

router.post('/api/user/login', async ctx => {
  try {
    const token = await controllers.user.loginUser(ctx.request.body)
    ctx.body = ({ success: true, token })
  } catch (error) {
    ctx.status = error.statusCode
    ctx.body = error.toString()
  }
})

router.post('/api/user/register', async ctx => {
  try {
    const token = await controllers.user.registerUser(ctx.request.body)
    ctx.body = ({ success: true, token })
  } catch (error) {
    ctx.status = error.statusCode
    ctx.body = error.toString()
  }
})
module.exports = router
