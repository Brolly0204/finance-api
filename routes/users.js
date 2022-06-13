const router = require('koa-router')()
const menuList = require('../data/menu')

const {
  loginController,
  registerController
} = require('../controllers/user')

router.prefix('/user')

router.get('/', function(ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function(ctx, next) {
  ctx.body = 'this is a users/bar response'
})

router.post('/login', async function(ctx, next) {
  // console.log('ctx', ctx.request.body)
  ctx.body = await loginController(ctx)
})

router.post('/register', async function(ctx, next) {
  // console.log('ctx', ctx.request.body)
  ctx.body = await registerController(ctx)
})

router.post('/getPermissionMenuList', async function(ctx, next) {
  // console.log('ctx', ctx.request.headers['x-access-token'])
  ctx.body = {
    respCode: 1001,
    data: {
      menus: menuList
    }
  }
})
module.exports = router
