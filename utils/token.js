const jwt = require('jsonwebtoken')
const jwtKey = 'finance-api'

class JwtToken {
  static createToken (data) {
    return jwt.sign(data, jwtKey, {
      expiresIn: '3d'
    })
  }

  static verifyToken (token) {
    try {
      const decoded = jwt.verify(token, jwtKey)
      return decoded
    } catch (err) {
      // err
      return null
    }
  }
}

module.exports = JwtToken
