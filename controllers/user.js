const JwtToken = require('../utils/token')

const createToken = (body) => {
  const {
    username,
    password
  } = body
  return JwtToken.createToken({
    username,
    password
  })
}

// const getUserInfo = (body) => {
//   const { username, password } = body
//   return JwtToken.verifyToken({ username, password })
// }
exports.loginController = async (ctx) => {
  const token = createToken(ctx.request.body)
  const {
    username
  } = ctx.request.body
  return {
    respCode: 1001,
    data: {
      userInfo: {
        id: 123,
        username,
        avatar: 'https://img2.baidu.com/it/u=1347252749,346830019&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'
      },
      token
    }
  }
}

exports.registerController = async (ctx) => {
  return {
    respCode: 1001,
    data: {
      username: 'a',
      password: 1
    }
  }
}
